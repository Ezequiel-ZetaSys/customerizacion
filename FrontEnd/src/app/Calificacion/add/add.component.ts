import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionService } from 'src/app/Service/service.service';
import { Calificacion } from 'src/app/Modelo/Calificacion';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  calificacionNueva: Calificacion={id:0,nombre:'',correo:'',calificacion:5,obs:''};
  valido = true;
  mensaje = "";
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  constructor(private calificacionService: CalificacionService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarCalificacion(){
    if (this.calificacionNueva.nombre.length < 4) {
      this.valido =false;
      this.mensaje ="Campo nombre obligatorio, debe ingresar al menos 3 letras";
    }else{     
        if (!this.emailRegex.test(this.calificacionNueva.correo)) {
          this.valido = false;
          this.mensaje = "Correo no válido";
        } else {

        }
    }

    if (this.valido) {
      this.calificacionService.saveCalificacion(this.calificacionNueva).subscribe(
        res=>{
          console.log(res);
          Swal.fire(
            'Calificación Guardada',
            'Muchas gracias por su tiempo!',
            'success'
          ) 
          this.router.navigate(['inicio']);
        },
        err=>console.log(err)
      );      
    } else {
      Swal.fire(
        'Error al guardar',
        this.mensaje,
        'error'
      ) 
    }

  }

}