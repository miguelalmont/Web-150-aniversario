import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {VisitasFormComponent} from '../visitas-form/visitas-form.component';
import {VisitasEditComponent } from '../visitas-edit/visitas-edit.component'
import {VisitasDetailsComponent } from '../visitas-details/visitas-details.component';
import { Visita } from 'src/app/models/models';
import { VisitasService } from 'src/app/services/visitas-service/visitas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visitas-view',
  templateUrl: './visitas-view.component.html',
  styleUrls: ['./visitas-view.component.scss']
})
export class VisitasViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'medios', 'actions'];
  dataSource: MatTableDataSource<Visita>;
  users: Visita[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private visitasService: VisitasService, private route: ActivatedRoute,
    private router: Router) {

    this.dataSource = new MatTableDataSource(this.users);
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
    
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createVisitaOnClick() {
    const dialogRef = this.dialog.open(VisitasFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editVisitaOnClick() {
    const dialogRef = this.dialog.open(VisitasEditComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsVisitarOnClick(row: Visita) {
    console.log(row);
    const dialogRef = this.dialog.open(VisitasDetailsComponent, {
      
      data: {row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
