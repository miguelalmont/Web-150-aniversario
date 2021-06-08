import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { HistoriaEditComponent } from '../historia-edit/historia-edit.component';
import { HistoriaFormComponent } from '../historia-form/historia-form.component';
import { Historia } from 'src/app/models/models';
import { HistoriaService } from 'src/app/services/historia-service/historia.service';
import { HistoriaDetailsComponent } from '../historia-details/historia-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Swal from "sweetalert2";

@Component({
  selector: 'app-historia-view',
  templateUrl: './historia-view.component.html',
  styleUrls: ['./historia-view.component.scss']
})
export class HistoriaViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'subtitulo', 'descripcion','enUso', 'actions'];
  dataSource: MatTableDataSource<Historia>;
  historiaData: Historia[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private historiaService: HistoriaService, private route: ActivatedRoute,
    private router: Router) {
    this.dataSource = new MatTableDataSource(this.historiaData);
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
    
    this.historiaService.getHistorias().subscribe(
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

  createHistoriaOnClick() {
    const dialogRef = this.dialog.open(HistoriaFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editHistoriaOnClick(row: Historia) {
    const dialogRef = this.dialog.open(HistoriaEditComponent, { disableClose: true, data: {row} });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  detailsHistoriaOnClick(row: Historia) {
    const dialogRef = this.dialog.open(HistoriaDetailsComponent, { data: {row} });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
          'Historia borrada correctamente',
          'success'
        )
      }
    })
  }
  
}