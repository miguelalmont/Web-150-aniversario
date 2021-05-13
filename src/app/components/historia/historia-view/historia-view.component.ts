import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { HistoriaDetailsComponent } from '../historia-details/historia-details.component';
import { HistoriaEditComponent } from '../historia-edit/historia-edit.component';
import { HistoriaFormComponent } from '../historia-form/historia-form.component';
import { Historia } from 'src/app/models/historia';
import { HistoriaService } from 'src/app/services/historia-service/historia.service';

@Component({
  selector: 'app-historia-view',
  templateUrl: './historia-view.component.html',
  styleUrls: ['./historia-view.component.scss']
})
export class HistoriaViewComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['title', 'subtitle', 'description', 'actions'];
  dataSource: MatTableDataSource<Historia>;
  historiaData: Historia[] = [];
  value = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private historiaService: HistoriaService) {
    this.dataSource = new MatTableDataSource(this.historiaData);
  }

  async ngOnInit(): Promise<void> {
    this.historiaData = await this.historiaService.getHistorias();
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
    console.log(this.historiaData)

    const dialogRef = this.dialog.open(HistoriaFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editUserOnClick() {
    const dialogRef = this.dialog.open(HistoriaEditComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsUserOnClick() {
    const dialogRef = this.dialog.open(HistoriaDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}