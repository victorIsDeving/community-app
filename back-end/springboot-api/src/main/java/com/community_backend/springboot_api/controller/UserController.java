package com.community_backend.springboot_api.controller;

import java.util.List;

import com.community_backend.springboot_api.models.User;
import com.community_backend.springboot_api.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
@Tag(name = "Users", description = "API REST for managing users")
@CrossOrigin(origins="*") // liberar todos os domínios para acesso dessa API
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    @Operation(summary="Retorna lista de usuarios")
    public List<User> listaUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    @Operation(summary="Retorna usuario unico")
    public User listaUserUnico(@PathVariable(value="id") long id) {
        return userRepository.findById(id);
    }

    @PostMapping("/user")
    @Operation(summary="Salve um usuario")
    public User inserirUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @DeleteMapping("/user")
    @Operation(summary="Deleta um usuario")
    public void deleteUser(@RequestBody User user) {
        userRepository.delete(user);
    }

    @PutMapping("/user")
    @Operation(summary="Atualiza um usuario")
    public User atualizaUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
