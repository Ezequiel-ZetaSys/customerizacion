import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionService } from 'src/app/Service/service.service';
import { Calificacion } from 'src/app/Modelo/Calificacion';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  calificacionNueva: Calificacion={id:2,nombre:'',correo:'',calificacion:3,obs:''};

  constructor(private calificacionService: CalificacionService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarCalificacion(){
    this.calificacionService.saveCalificacion(this.calificacionNueva).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/listar']);
      },
      err=>console.log(err)
    );
  }

}