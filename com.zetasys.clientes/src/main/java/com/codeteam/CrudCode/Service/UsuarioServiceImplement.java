/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codeteam.CrudCode.Service;

import com.codeteam.CrudCode.Model.Usuario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.codeteam.CrudCode.Dao.UsuarioDao;

/**
 *
 * @author zeta
 */
@Service
public class UsuarioServiceImplement  implements UsuarioService{
    @Autowired
    private UsuarioDao usuarioDao;
    
    @Override
    @Transactional(readOnly=true)
    public List<Usuario> findAll()
    {
        return (List<Usuario>) usuarioDao.findAll();
    }
    
    @Override
     @Transactional(readOnly=false)
    public Usuario save(Usuario usuario)
    {
        return usuarioDao.save(usuario);
    }
    
    @Override
    @Transactional(readOnly=true)
    public Usuario findById(Integer id)
    {
        return usuarioDao.findById(id).orElse(null);
    }
    
    @Override
    @Transactional(readOnly=false)
    public void delete(Integer id)
    {
        usuarioDao.deleteById(id);
    }
     
}
