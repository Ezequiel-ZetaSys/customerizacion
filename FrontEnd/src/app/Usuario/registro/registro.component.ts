import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.usuario';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroComponent implements OnInit {

  usuarioNuevo: Usuario={id:0,nombre:'',user:'',pass:''};
  valido = true;
  mensaje = "";
  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {

  }

  registrarUsuario(){
    this.valido = true;
    if (this.usuarioNuevo.nombre.length < 3 || this.usuarioNuevo.user.length < 3 || this.usuarioNuevo.pass.length < 3) {
      this.valido =false;
      this.mensaje ="Todos los campos deben tener al menos 3 caracteres";
    }

    if (this.valido) {
      this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe(
        res=>{
          Swal.fire(
            'Usuario Registrado',
            'Ya puede iniciar sesión',
            'success'
          ) 
          this.router.navigate(['/login']);
        },
        err=> Swal.fire(
          'Error al guardar',
          err,
          'error'
        ) 
      );
    }else{
      Swal.fire(
        'Error al guardar',
        this.mensaje,
        'error'
      ) 
    }
    
  }

}
