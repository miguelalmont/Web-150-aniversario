import { MaterialesService } from 'src/app/services/materiales-service/materiales.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MaterialesFormComponent} from '../materiales-form/materiales-form.component';
import {MaterialesEditComponent } from '../materiales-edit/materiales-edit.component'
import {MaterialesDetailsComponent } from '../materiales-details/materiales-details.component';
import { Material } from 'src/app/models/models';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-materiales-view',
  templateUrl: './materiales-view.component.html',
  styleUrls: ['./materiales-view.component.scss']
})
export class MaterialesViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'contenido', 'medios', 'enUso', 'actions'];
  dataSource: MatTableDataSource<Material>;
  materiales: Material[];
  value = '';
  isLoading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private materialService: MaterialesService, private route: ActivatedRoute,
    private router: Router) {

    this.dataSource = new MatTableDataSource(this.materiales);
    console.log(this.dataSource)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Por página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.getRangeLabel = 
    (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `Sin registros`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
    
    

    this.materialService.getMaterial().subscribe(
      response => {
        this.dataSource.data = response
        console.log(this.dataSource.data)
        this.isLoading = false;
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al cargar los datos, ${error}`,
          icon: 'error',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cerrar",
        })
        this.isLoading = true;
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createMaterialesOnClick() {
    const dialogRef = this.dialog.open(MaterialesFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editMaterialesOnClick(row: Material) {
    const dialogRef = this.dialog.open(MaterialesEditComponent, { disableClose: true, data: {row} });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsMaterialesOnClick(row: Material) {
    console.log(row);
    const dialogRef = this.dialog.open(MaterialesDetailsComponent, {
      
      data: {row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  enUsoBool(enUso: number) {
    if (enUso == 0)
      return false;
    else if (enUso == 1)
      return true;
    else
      return null;
  }
  borrarSwt(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado',
          'Material borrado correctamente',
          'success'
        )
      }
    })
  }
  
}
