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
    @GetMapping("/usuarios/{id}")
    public Usuario getUnUsuario(@PathVariable Integer id)
    {
        return usuarioService.findById(id);
    }
    
    //Modificar
    @PutMapping("/usuarios/{id}")
    public Usuario modificar(@RequestBody Usuario usuario, @PathVariable Integer id)
    {
        Usuario usuarioActual= usuarioService.findById(id);
        usuarioActual.setNombre(usuario.getNombre());
        usuarioActual.setUser(usuario.getUser());
        usuarioActual.setPass(usuario.getPass());

        
        return usuarioService.save(usuarioActual);
    }  
    
    @DeleteMapping("/usuarios/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        usuarioService.delete(id);
    }
    
}
