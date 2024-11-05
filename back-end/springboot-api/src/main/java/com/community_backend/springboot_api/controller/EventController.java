package com.community_backend.springboot_api.controller;

import com.community_backend.springboot_api.models.Event;
import com.community_backend.springboot_api.repository.EventRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@Tag(name = "Events", description = "API REST for managing Events")
@CrossOrigin(origins="*") // liberar todos os domínios para acesso dessa API
public class EventController {

    @Autowired
    EventRepository EventRepository;

    @GetMapping("/Events")
    @Operation(summary="Retorna lista de eventos")
    public List<Event> listaEvents() {
        return EventRepository.findAll();
    }

    @GetMapping("/Events/{id}")
    @Operation(summary="Retorna evento unico")
    public Event listaEventUnico(@PathVariable(value="id") long id) {
        return EventRepository.findById(id);
    }

    @PostMapping("/event")
    @Operation(summary="Salve um evento")
    public Event inserirEvent(@RequestBody Event newEvent) {
        return EventRepository.save(newEvent);
    }

    @DeleteMapping("/event")
    @Operation(summary="Deleta um evento")
    public void deleteEvent(@RequestBody Event event) {
        EventRepository.delete(event);
    }

    @PutMapping("/event")
    @Operation(summary="Atualiza um evento")
    public Event atualizaEvent(@RequestBody Event event) {
        return EventRepository.save(event);
    }

}
