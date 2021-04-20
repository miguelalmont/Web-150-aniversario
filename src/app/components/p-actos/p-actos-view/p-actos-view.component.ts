import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {PActosFormComponent} from '../p-actos-form/p-actos-form.component';
import {PActosEditComponent } from '../p-actos-edit/p-actos-edit.component'
import {PActosDetailsComponent } from '../p-actos-details/p-actos-details.component';

export interface UserData {
  title: string;
  description: string;
  category: string;
  fecha: string;
  image: string;
}
 
let usersData: UserData[] = [
  {
    title: 'Saludo de la madre Yvonne',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Saludo de la madre Yvonne',
    fecha: '01/01/2020',
    image: 'image caption',
  },
  {
    title: 'Saludo de la madre Yvonne',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Saludo de la madre Yvonne',
    fecha: '01/01/2020',
    image: 'image caption',
  },
  {
    title: 'Saludo de la madre Yvonne',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Saludo de la madre Yvonne',
    fecha: '01/01/2020',
    image: 'image caption',
  },
  {
    title: 'Saludo de la madre Yvonne',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Saludo de la madre Yvonne',
    fecha: '01/01/2020',
    image: 'image caption',
  },
  {
    title: 'Saludo de la madre Yvonne',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Saludo de la madre Yvonne',
    fecha: '01/01/2020',
    image: 'image caption',
  },
  {
    title: 'Saludo de la madre Yvonne',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Saludo de la madre Yvonne',
    fecha: '01/01/2020',
    image: 'image caption',
  }
]

@Component({
  selector: 'app-p-actos-view',
  templateUrl: './p-actos-view.component.html',
  styleUrls: ['./p-actos-view.component.scss']
})
export class PActosViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'description','category','fecha', 'image', 'actions'];
  dataSource: MatTableDataSource<UserData>;
  users: UserData[] = usersData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {

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

  createUserOnClick() {
    const dialogRef = this.dialog.open(PActosFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editUserOnClick() {
    const dialogRef = this.dialog.open(PActosEditComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsUserOnClick() {
    const dialogRef = this.dialog.open(PActosDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
