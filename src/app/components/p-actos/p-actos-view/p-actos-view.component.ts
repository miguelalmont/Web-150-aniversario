import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { PActosFormComponent } from '../p-actos-form/p-actos-form.component';
import { PActosEditComponent } from '../p-actos-edit/p-actos-edit.component';
import { PActosDetailsComponent } from '../p-actos-details/p-actos-details.component';
import { ActoData } from 'src/app/models/actos';
import { PActoService } from 'src/app/services/p-acto-service/p-acto.service';
 
let usersData: ActoData[] = []

@Component({
  selector: 'app-p-actos-view',
  templateUrl: './p-actos-view.component.html',
  styleUrls: ['./p-actos-view.component.scss']
})
export class PActosViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'description', 'category', 'date', 'image', 'actions'];
  dataSource: MatTableDataSource<ActoData>;
  actos: ActoData[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private pActosService: PActoService) {

    this.pActosService.getHistorias().then((data) => this.actos = data);
    this.dataSource = new MatTableDataSource(this.actos);
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

  createActosOnClick() {
    console.log(this.actos)
    const dialogRef = this.dialog.open(PActosFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editActosOnClick() {
    const dialogRef = this.dialog.open(PActosEditComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsActosOnClick() {
    const dialogRef = this.dialog.open(PActosDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}