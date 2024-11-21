package com.community_backend.springboot_api.controller;

import com.community_backend.springboot_api.models.Interest;
import com.community_backend.springboot_api.services.InterestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/interests")
@Tag(name = "Interests", description = "API REST for managing Interests")
@CrossOrigin(origins = "*")
public class InterestController {

    @Autowired
    private InterestService interestService;

    // Criar ou atualizar interesse
    @PostMapping
    @Operation(summary = "Cria ou atualiza um interesse")
    public Interest createOrUpdateInterest(@RequestBody Interest interest) {
        return interestService.saveInterest(interest);
    }

    // Listar todos os interesses
    @GetMapping
    @Operation(summary = "Retorna todos os interesses")
    public List<Interest> getAllInterests() {
        return interestService.getAllInterests();
    }

    // Obter um interesse específico pelo nome
    @GetMapping("/{interesse}")
    @Operation(summary = "Retorna um interesse específico")
    public Optional<Interest> getInterestByName(@PathVariable String interesse) {
        return interestService.getInterestByName(interesse);
    }

    // Deletar um interesse
    @DeleteMapping("/{interesse}")
    @Operation(summary = "Deleta um interesse")
    public void deleteInterest(@PathVariable String interesse) {
        interestService.deleteInterest(interesse);
    }

    // Adicionar interesse a um evento
    @PostMapping("/event/{eventId}/interests/{interesse}")
    @Operation(summary = "Adiciona um interesse a um evento")
    public void addInterestToEvent(@PathVariable Long eventId, @PathVariable String interesse) {
        interestService.addInterestToEvent(interesse, eventId);
    }

    // Adicionar interesse a um usuário
    @PostMapping("/user/{userId}/interests/{interesse}")
    @Operation(summary = "Adiciona um interesse a um usuário")
    public void addInterestToUser(@PathVariable Long userId, @PathVariable String interesse) {
        interestService.addInterestToUser(interesse, userId);
    }
}
