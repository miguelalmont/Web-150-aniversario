import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { OracionFormComponent } from '../oracion-form/oracion-form.component';
import { OracionEditComponent } from '../oracion-edit/oracion-edit.component';
import { OracionDetailsComponent } from '../oracion-details/oracion-details.component';
import { Oracion } from 'src/app/models/models';
import { OracionService } from 'src/app/services/oracion-service/oracion.service.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface PrayerData {
  titulo: string;
  oracion: string;
}

let prayerData: PrayerData[] = [
  {
    titulo: 'Oración 1',
    oracion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    titulo: 'Oración 1',
    oracion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    titulo: 'Oración 1',
    oracion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    titulo: 'Oración 1',
    oracion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    titulo: 'Oración 1',
    oracion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    titulo: 'Oración 1',
    oracion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

@Component({
  selector: 'app-oracion-view',
  templateUrl: './oracion-view.component.html',
  styleUrls: ['./oracion-view.component.scss']
})
export class OracionViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['titulo', 'oracion', 'actions'];
  dataSource: MatTableDataSource<PrayerData>;
  prayers: PrayerData[] = prayerData;
  show: boolean = true

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private oracionService: OracionService, private route: ActivatedRoute,
    private router: Router) {
    this.dataSource = new MatTableDataSource(this.prayers);
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

}
