/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.codeteam.CrudCode.Service;

import com.codeteam.CrudCode.Model.Usuario;
import java.util.List;

/**
 *
 * @author zeta
 */
public interface UsuarioService {
    public List<Usuario> findAll();
    public Usuario save(Usuario usuario);
    public Usuario findById(Integer id);
    public void delete(Integer id);  
}
