import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionService } from 'src/app/Service/service.service';
import { Calificacion } from 'src/app/Modelo/Calificacion';
import Swal from 'sweetalert2';
import { ListarComponent } from '../listar/listar.component';


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
  existeCorreo = "";
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  constructor(private calificacionService: CalificacionService, private router:Router) { }

  ngOnInit(): void {

  }



  agregarCalificacion(){

    if (this.calificacionNueva.nombre.length < 3) {
      this.valido =false;
      this.mensaje ="Campo nombre obligatorio, debe ingresar al menos 3 caracteres";
    }else{     
        if (!this.emailRegex.test(this.calificacionNueva.correo)) {
          this.valido = false;
          this.mensaje = "Correo no válido";
        }else{
           this.mensaje = "Este correo ya ha calificado, gracias!";
        }
    }


    if (this.valido) {
      this.calificacionService.saveCalificacion(this.calificacionNueva).subscribe(
        res=>{
          Swal.fire(
            'Calificación Guardada',
            'Muchas gracias por su tiempo!',
            'success'
          ) 
          this.router.navigate(['inicio']);
        },
        err=> Swal.fire(
          'Error al guardar',
          this.mensaje,
          'error'
        ) 
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