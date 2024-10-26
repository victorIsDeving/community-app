package com.community_backend.springboot_api.controller;

import java.util.List;

import com.community_backend.springboot_api.models.User;
import com.community_backend.springboot_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<User> listaUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User listaUserUnico(@PathVariable(value="id") long id) {
        return userRepository.findById(id);
    }

    @PostMapping("/user")
    public User inserirUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestBody User user) {
        userRepository.delete(user);
    }

    @PutMapping("/user")
    public User atualizaUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
