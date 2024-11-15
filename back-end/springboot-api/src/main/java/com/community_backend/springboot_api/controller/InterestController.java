package com.community_backend.springboot_api.controller;

import com.community_backend.springboot_api.models.Interest;
import com.community_backend.springboot_api.repository.InterestRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Tag(name = "Interests", description = "API REST for managing interests")
@CrossOrigin(origins="*") // liberar todos os domínios para acesso dessa API
public class InterestController {

    @Autowired
    InterestRepository interestRepository;

    @GetMapping("/interests")
    @Operation(summary="Retorna lista de interesses")
    public List<Interest> listaInterests() {
        return interestRepository.findAll();
    }
/*
    @GetMapping("/interests/{id}")
    @Operation(summary="Retorna interesse unico")
    public Interest listaInterestUnico(@PathVariable(value="id") long id) {
        return interestRepository.findById(id);
    }
*/
    @PostMapping("/interest")
    @Operation(summary="Salve um interesse")
    public Interest inserirInterest(@RequestBody Interest newInterest) {
        return interestRepository.save(newInterest);
    }

    @DeleteMapping("/interest")
    @Operation(summary="Deleta um interesse")
    public void deleteInterest(@RequestBody Interest interest) {
        interestRepository.delete(interest);
    }

    @PutMapping("/interest")
    @Operation(summary="Atualiza um interesse")
    public Interest atualizaInterest(@RequestBody Interest interest) {
        return interestRepository.save(interest);
    }

}
