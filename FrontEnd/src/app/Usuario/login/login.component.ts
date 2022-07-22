import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.usuario';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario={id:0,nombre:'',user:'',pass:''};

  constructor(private usuarioService: UsuarioService, 
               private router:Router,) 
     { }

  ngOnInit(): void {

  }

  ingresar(user: string, pass: string){
    this.usuarioService.getUnUsuario(user).subscribe(
      res=>{
        if(res!== null){
          this.usuario=res;
        }else{
          this.usuario = {id:0,nombre:'',user:'',pass:''};
        }
        
        if (this.usuario.pass === pass) {
            Swal.fire(
              'Ingreso Exitoso',
              'Bienvenido: ' + this.usuario.nombre,
              'info'
            ) 
            environment.logueado = true;
            this.router.navigate(['listar']);
        } else {
          Swal.fire(
            'Usuario o Pass Incorrecta',
            'Verifique si la ha escrito correctamente ',
            'error'
          ) 
            environment.logueado = true;
        }
      },
      err=>{
        Swal.fire(
          'No se pudo establecer Conexión',
          'Detalle de error: ' + console.log(err),
          'error'
        )      
      }
    );
  }


}
