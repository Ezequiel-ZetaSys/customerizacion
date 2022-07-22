/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.codeteam.CrudCode.Service;

import com.codeteam.CrudCode.Model.Calificacion;
import java.util.List;

/**
 *
 * @author zeta
 */
public interface CalificacionService {
    public List<Calificacion> findAll();
    public Calificacion save(Calificacion calificacion);
    public Calificacion findById(Integer id);
    public Calificacion getCorreoRepetido(String correo);
    public void delete(Integer id);  
}
