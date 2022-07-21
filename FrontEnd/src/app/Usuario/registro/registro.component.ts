import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/service.usuario';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioNuevo: Usuario={id:0,nombre:'',user:'',pass:''};

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {

  }

  registrarUsuario(){
    this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      err=>console.log(err)
    );
  }

}
