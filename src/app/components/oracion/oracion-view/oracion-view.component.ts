import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { OracionFormComponent } from '../oracion-form/oracion-form.component';
import { OracionEditComponent } from '../oracion-edit/oracion-edit.component';
import { OracionDetailsComponent } from '../oracion-details/oracion-details.component';
import { Oracion } from 'src/app/models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { OracionService } from 'src/app/services/oracion-service/oracion.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-oracion-view',
  templateUrl: './oracion-view.component.html',
  styleUrls: ['./oracion-view.component.scss']
})
export class OracionViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'oracion','enUso', 'actions'];
  dataSource: MatTableDataSource<Oracion>;
  oraciones: Oracion[];
  value = '';
  show: boolean = true

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private oracionService: OracionService, private route: ActivatedRoute,
    private router: Router) {
    this.dataSource = new MatTableDataSource(this.oraciones);
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
    
    this.oracionService.getOracion().subscribe(
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

  createPrayerOnClick() {
    const dialogRef = this.dialog.open(OracionFormComponent, { disableClose: true });

     dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
   });
  }

  editPrayerOnClick() {
    const dialogRef = this.dialog.open(OracionEditComponent, { disableClose: true });

   dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
     });
  }

  detailsPrayerOnClick(row: Oracion) {
    console.log(row);
    const dialogRef = this.dialog.open(OracionDetailsComponent, {
      
      data: {row}
    });

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
          'Oracion borrada correctamente',
          'success'
        )
      }
    })
  }

}
