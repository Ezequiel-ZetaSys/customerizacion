import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.usuario';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario={id:0,nombre:'',user:'',pass:''};

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {

  }

  ingresar(){
    this.usuarioService.saveUsuario(this.usuario).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      err=>console.log(err)
    );
  }


}
