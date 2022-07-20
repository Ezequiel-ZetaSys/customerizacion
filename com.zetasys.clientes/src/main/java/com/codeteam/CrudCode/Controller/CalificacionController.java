/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codeteam.CrudCode.Controller;

import com.codeteam.CrudCode.Model.Calificacion;
import com.codeteam.CrudCode.Service.CalificacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author zeta
 */
@RestController
@CrossOrigin(origins={"*"})
@RequestMapping("/api")
public class CalificacionController {
    @Autowired
    private CalificacionService calificacionService;
    
    //listar
    @GetMapping("/calificaciones")
    public List<Calificacion> listar()
    {
        return calificacionService.findAll();
    }
    
    //guardar
    @PostMapping("/calificaciones")
    public  Calificacion guardar(@RequestBody Calificacion calificacion)
    {
        return calificacionService.save(calificacion);
    }
    
    //get una calificacion
    @GetMapping("/calificaciones/{id}")
    public Calificacion getUnaCalificacion(@PathVariable Integer id)
    {
        return calificacionService.findById(id);
    }
    
    //Modeficar
    @PutMapping("/calificaciones/{id}")
    public Calificacion modifecar(@RequestBody Calificacion calificacion,@PathVariable Integer id)
    {
        Calificacion calificacionActual= calificacionService.findById(id);
        calificacionActual.setCalificacion(calificacion.getCalificacion());
        calificacionActual.setObs(calificacion.getObs());
        
        return calificacionService.save(calificacionActual);
    }
    
    @DeleteMapping("/calificaciones/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        calificacionService.delete(id);
    }
    
}
