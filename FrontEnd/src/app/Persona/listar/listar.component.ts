import { Component, OnInit } from '@angular/core';
import { CalificacionService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista:any=[];
  constructor(private calificacionService: CalificacionService) { }

  ngOnInit(): void {
    this.listarCalificacion();
  }

  listarCalificacion()
  {
    this.calificacionService.getCalificacion().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.calificacionService.deleteCalificacion(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
