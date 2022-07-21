import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.usuario';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ListarComponent } from 'src/app/Calificacion/listar/listar.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario={id:0,nombre:'',user:'',pass:''};

  constructor(private usuarioService: UsuarioService, 
               private router:Router,
              private antivateRouter: ActivatedRoute,) 
     { }

  ngOnInit(): void {

  }

  ingresar(user: string, pass: string){
    this.usuarioService.getUnUsuario(user).subscribe(
      res=>{
        this.usuario=res;
        if (this.usuario.pass === pass) {
            console.log("Ingreso existoso");
            environment.logueado = true;
            this.router.navigate(['inicio']);
        } else {
            console.log("Usuario o contraseña incorrectos");
            environment.logueado = true;
        }
      },
      err=>console.log(err)
    );
  }


}
