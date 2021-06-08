import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {SaludosFormComponent} from '../saludos-form/saludos-form.component';
import {SaludosEditComponent } from '../saludos-edit/saludos-edit.component'
import {SaludosDetailsComponent } from '../saludos-details/saludos-details.component';
import { Saludo } from 'src/app/models/models';
import { SaludosService } from 'src/app/services/saludos-service/saludos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";


@Component({
  selector: 'app-saludos-view',
  templateUrl: './saludos-view.component.html',
  styleUrls: ['./saludos-view.component.scss']
})
export class SaludosViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'descripcion','texto','url','tipo','enUso', 'actions'];
  dataSource: MatTableDataSource<Saludo>;
  saludoData: Saludo[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private saludoService: SaludosService, private route: ActivatedRoute,
    private router: Router) {

    this.dataSource = new MatTableDataSource(this.saludoData);
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

    

    // Aqui llamamos al servicio getAmbientes y le asignamos el dadatSource.data a la respuesta
    this.saludoService.getSaludos().subscribe(
      response => {
        this.dataSource.data = response
        console.log(this.dataSource.data)
      },
      error => {
        console.log(error)
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al cargar los datos, ${error}`,
          icon: 'error',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cerrar",
        })
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

  createSaludoOnClick() {
    const dialogRef = this.dialog.open(SaludosFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editSaludoOnClick(row: Saludo) {
    const dialogRef = this.dialog.open(SaludosEditComponent, { disableClose: true, data: { row } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsSaludoOnClick(row: Saludo) {
    console.log(row);
    const dialogRef = this.dialog.open(SaludosDetailsComponent, {

      data: { row }
    });

  }

  deleteUserOnClick(){
    Swal.fire({
      title: '¿Estás seguro?',
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
          'Saludo borrado correctamente',
          'success'
        )
      }
    })
  }
}
