import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PActosFormComponent } from '../p-actos-form/p-actos-form.component';
import { PActosEditComponent } from '../p-actos-edit/p-actos-edit.component';
import { PActosDetailsComponent } from '../p-actos-details/p-actos-details.component';
import { ActoData } from 'src/app/models/models';
import { PActoService } from 'src/app/services/p-acto-service/p-acto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";

let usersData: ActoData[] = []

@Component({
  selector: 'app-p-actos-view',
  templateUrl: './p-actos-view.component.html',
  styleUrls: ['./p-actos-view.component.scss']
})
export class PActosViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'descripcion', 'ubicacion', 'categoria', 'fecha', 'video', 'enUso', 'actions'];
  dataSource: MatTableDataSource<ActoData>;
  actos: ActoData[];
  value = '';
  isLoading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private pActosService: PActoService, private route: ActivatedRoute,
    private router: Router) {

    this.dataSource = new MatTableDataSource(this.actos);
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
    
    this.pActosService.getActos().subscribe(
      response => {
        this.dataSource.data = response
        console.log(this.dataSource.data)
        this.isLoading = false;
      },
      error =>  {
        this.isLoading = true;
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

  createActosOnClick() {
    const dialogRef = this.dialog.open(PActosFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editActosOnClick(row: ActoData) {
    const dialogRef = this.dialog.open(PActosEditComponent, { data: { row } });

    dialogRef.afterClosed().subscribe(result => {
      this.pActosService.getActos().subscribe(
        response => {
          this.dataSource.data = response
          console.log(this.dataSource.data)
        },
        error => console.log(error)
      )
    });
  }

  detailsActosOnClick(row: ActoData) {
    console.log(row);
    const dialogRef = this.dialog.open(PActosDetailsComponent, {
      data: { row }
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

  deleteActosOnClick(row: ActoData) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pActosService.deleteActos(row).subscribe(
          res => {
            console.log("Acto borrado", res, row);
            Swal.fire(
              'Perfecto',
              'Acto eliminado correctamente',
              'success'
            )
          },
          error => {
            console.error(error, "Error", row)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al eliminar',
              icon: 'error',
              cancelButtonColor: '#d33',
              cancelButtonText: "Cerrar",
            })
          }
        );
      }
    })
  }
}
