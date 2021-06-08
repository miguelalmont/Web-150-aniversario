import { ambientesPj } from './../../../models/models';
import { AmbientesPJService } from './../../../services/ambientesPJ-service/ambientes-pj.service.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AmbientesPjDetailsComponent } from '../ambientes-pj-details/ambientes-pj-details.component';
import { AmbientesPjEditComponent } from '../ambientes-pj-edit/ambientes-pj-edit.component';
import { AmbientesPjFormComponent } from '../ambientes-pj-form/ambientes-pj-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-ambientes-pj-view',
  templateUrl: './ambientes-pj-view.component.html',
  styleUrls: ['./ambientes-pj-view.component.scss']
})
export class AmbientesPjViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'descripcion','medios','enUso', 'actions'];
  dataSource: MatTableDataSource<ambientesPj>;
  ambientes: ambientesPj[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private ambientesPjService: AmbientesPJService, private route: ActivatedRoute,
    private router: Router) {

    this.dataSource = new MatTableDataSource(this.ambientes);
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

    this.dataSource.sort = this.sort;

    // Aqui llamamos al servicio getAmbientes y le asignamos el dadatSource.data a la respuesta
    this.ambientesPjService.getAmbientesPj().subscribe(
      response => {
        this.dataSource.data = response
        console.log(this.dataSource.data)
      },
      error => console.log(error)
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createAmbienteOnClick() {
    const dialogRef = this.dialog.open(AmbientesPjFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editAmbienteOnClick(row: ambientesPj) {
    const dialogRef = this.dialog.open(AmbientesPjEditComponent, { disableClose: true, data: { row } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsAmbienteOnClick(row: ambientesPj) {
    console.log(row);
    const dialogRef = this.dialog.open(AmbientesPjDetailsComponent, {

      data: { row }
    });

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
          'Ambiente borrado correctamente',
          'success'
        )
      }
    })
  }

}