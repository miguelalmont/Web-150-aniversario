import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isAdmin: boolean = true;
  // id: number;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    // TODO: comprobar con redux el id del usuario para ocultar la vista de Usuarios
    // this.usuarioService.getUserByID(this.id).subscribe(
    //   res => {
    //     res.rol === "admin" && this.isAdmin = true
    //   },
    //   errr => {
    //     res.rol === "admin" && this.isAdmin = false
    //   }
    // )
  }

}
