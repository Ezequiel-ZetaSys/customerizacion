import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Calificacion/add/add.component';
import { ListarComponent } from './Calificacion/listar/listar.component';
import { RegistroComponent } from './Usuario/registro/registro.component';
import { LoginComponent } from './Usuario/login/login.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
