import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calificacion } from '../Modelo/Calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  url='http://localhost:8080/api/calificaciones';
  constructor(private http: HttpClient) { }

  getCalificaciones():Observable<any>
  {
    return this.http.get(this.url);
  }

  getCorreoRepetido(correo: string):Observable<any>
  {
    return this.http.get(this.url+'/'+correo);
  }

  saveCalificacion(calificacion: Calificacion):Observable<any>
  {
    return this.http.post(this.url, calificacion);
  }

  deleteCalificacion(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}
