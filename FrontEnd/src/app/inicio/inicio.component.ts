import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {
  public logueado = environment.logueado;
  constructor (private router:Router){

  }
  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  Registrar(){
    this.router.navigate(["registro"]);
  }
  Login(){
    this.router.navigate(["login"]);
  }
  Salir(){
    environment.logueado = false;
    this.router.navigate(["inicio"]);
  }

}
