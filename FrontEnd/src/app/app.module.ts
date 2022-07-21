import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Calificacion/listar/listar.component';
import { AddComponent } from './Calificacion/add/add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { LoginComponent } from './Usuario/login/login.component';
import { RegistroComponent } from './Usuario/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxStarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
