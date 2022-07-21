import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
}
