import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsersComponent } from '../users-form/users.component';
import { EditUserComponent } from '../edit-user/edit-user.component'
import { DetailsUserComponent } from '../details-user/details-user.component';
import { User } from 'src/app/models/models';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";


@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['username', 'mail', 'rolName', 'actions'];
  dataSource: MatTableDataSource<User>;
  users: User[] = [];
  userToDetail: User;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  value = '';

  constructor(public dialog: MatDialog, private usuariosService: UsuariosService, private route: ActivatedRoute,
    private router: Router) {
    this.dataSource = new MatTableDataSource(this.users);
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

    this.usuariosService.getUser().subscribe(
      response => {
        this.dataSource.data = response
        console.log(this.dataSource.data)
      },
      error => {
        console.log(error)
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al cargar los datos, ${error}`,
          icon: 'error',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cerrar",
        })
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

  createUserOnClick() {
    const dialogRef = this.dialog.open(UsersComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editUserOnClick(row: User) {
    const dialogRef = this.dialog.open(EditUserComponent, { data: { row } });

    dialogRef.afterClosed().subscribe(result => {
      this.usuariosService.getUser().subscribe(
        response => {
          this.dataSource.data = response
          console.log(this.dataSource.data)
        },
        error => console.log(error)
      )
    });
  }

  detailsUserOnClick(row: User) {
    console.log(row);
    const dialogRef = this.dialog.open(DetailsUserComponent, {
      data: { row }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeFilter() {
    this.dataSource.filter = null;
    this.value = '';
  }

  checkRolName(rolName: string) {
    if (rolName == 'admin')
      return true;
    else
      return false;
  }

  deleteUserOnClick(row: User) {

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
        this.usuariosService.deleteUser(row.id).subscribe(
          res => {
            console.log("usuario borrado", res, row);
            Swal.fire(
              'Perfecto',
              'Usuario eliminado correctamente',
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
