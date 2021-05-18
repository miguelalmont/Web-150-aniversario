import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {SaludosFormComponent} from '../saludos-form/saludos-form.component';
import {SaludosEditComponent } from '../saludos-edit/saludos-edit.component'
import {SaludosDetailsComponent } from '../saludos-details/saludos-details.component';
import { SaludosDataSource } from 'src/app/dataSources/saludosDataSource';
import { Saludos } from 'src/app/models/models';
import { SaludosService } from 'src/app/services/saludos-service/saludos.service';
 

@Component({
  selector: 'app-saludos-view',
  templateUrl: './saludos-view.component.html',
  styleUrls: ['./saludos-view.component.scss']
})
export class SaludosViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'texto', 'descripcion', 'medios', 'actions'];
  dataSource: SaludosDataSource;
  saludosData: Saludos[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private saludosService: SaludosService) {
    this.dataSource = new SaludosDataSource(this.saludosService);
  }

  ngOnInit() {
    this.dataSource.LoadSaludos();
    
    console.log(this.dataSource);
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
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createUserOnClick() {
    const dialogRef = this.dialog.open(SaludosFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editUserOnClick() {
    const dialogRef = this.dialog.open(SaludosEditComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsUserOnClick() {
    const dialogRef = this.dialog.open(SaludosDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}