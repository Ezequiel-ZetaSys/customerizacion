import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='http://localhost:8080/api/usuarios';
  constructor(private http: HttpClient) { }

  getUsuarios():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnUsuario(user: string):Observable<any>
  {
    return this.http.get(this.url+'/'+user);
  }

  saveUsuario(usuario: Usuario):Observable<any>
  {
    return this.http.post(this.url, usuario);
  }

}
