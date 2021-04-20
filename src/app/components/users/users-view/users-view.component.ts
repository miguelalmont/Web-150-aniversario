import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {UsersComponent} from '../users-form/users.component';
import {EditUserComponent } from '../edit-user/edit-user.component'
import { DetailsUserComponent } from '../details-user/details-user.component';

export interface UserData {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

let usersData: UserData[] = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '123456',
    admin: true
  },
  {
    name: 'Pepe',
    email: 'pepe@gmail.com',
    password: '123456',
    admin: false
  },
  {
    name: 'Pepa',
    email: 'pepa@gmail.com',
    password: '123456',
    admin: false
  },
  {
    name: 'Pepa',
    email: 'pepa@gmail.com',
    password: '123456',
    admin: false
  },
  {
    name: 'Pepa',
    email: 'pepa@gmail.com',
    password: '123456',
    admin: false
  },
  {
    name: 'Pepa',
    email: 'pepa@gmail.com',
    password: '123456',
    admin: false
  },
  {
    name: 'Pepa',
    email: 'pepa@gmail.com',
    password: '123456',
    admin: false
  }
]

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'admin', 'actions'];
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
    const dialogRef = this.dialog.open(UsersComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editUserOnClick() {
    const dialogRef = this.dialog.open(EditUserComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  detailsUserOnClick() {
    const dialogRef = this.dialog.open(DetailsUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
