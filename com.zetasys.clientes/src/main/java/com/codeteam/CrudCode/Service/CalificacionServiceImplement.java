/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codeteam.CrudCode.Service;

import com.codeteam.CrudCode.Model.Calificacion;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.codeteam.CrudCode.Dao.CalificacionDao;

/**
 *
 * @author zeta
 */
@Service
public class CalificacionServiceImplement  implements CalificacionService{
    @Autowired
    private CalificacionDao calificacionDao;
    
    @Override
    @Transactional(readOnly=true)
    public List<Calificacion> findAll()
    {
        return (List<Calificacion>) calificacionDao.findAll();
    }
    
    @Override
     @Transactional(readOnly=false)
    public Calificacion save(Calificacion calificacion)
    {
        return calificacionDao.save(calificacion);
    }
    
    @Override
    @Transactional(readOnly=true)
    public Calificacion findById(Integer id)
    {
        return calificacionDao.findById(id).orElse(null);
    }
    
    @Override
    @Transactional(readOnly=false)
    public void delete(Integer id)
    {
        calificacionDao.deleteById(id);
    }
     
}
