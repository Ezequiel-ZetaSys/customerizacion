/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codeteam.CrudCode.Controller;

import com.codeteam.CrudCode.Model.Usuario;
import com.codeteam.CrudCode.Service.UsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
    
    //listar
    @GetMapping("/usuarios")
    public List<Usuario> listar()
    {
        return usuarioService.findAll();
    }
    
    //guardar
    @PostMapping("/usuarios")
    public Usuario save(@RequestBody Usuario usuario)
    {
        return usuarioService.save(usuario);
    }
    
    
    //leer un usuario
    @GetMapping("/usuarios/{user}")
    public Usuario getUnUsuario(@PathVariable String user)
    {
        return usuarioService.findById(user);
    }
    
  
    
    
}
