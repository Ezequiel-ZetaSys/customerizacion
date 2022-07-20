import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  url='http://localhost:8080/api/calificaciones';
  constructor(private http: HttpClient) { }

  getCalificacion():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaCalificacion(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveCalificacion(calificacion: Calificacion):Observable<any>
  {
    return this.http.post(this.url, calificacion);
  }

  editCalificacion(id:string, calificacion: Calificacion):Observable<any>
  {
    return this.http.put(this.url+'/'+id, calificacion);
  }

  deleteCalificacion(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Calificacion{
  id:string;
  nombre:string;
  correo:string;
  calificacion:String;
  obs:string;
}