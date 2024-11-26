package com.community_backend.springboot_api.controller;

import java.util.List;

import com.community_backend.springboot_api.models.Event;
import com.community_backend.springboot_api.repository.EventRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
@Tag(name = "Event", description = "API REST for managing events")
@CrossOrigin(origins="*") // liberar todos os domínios para acesso dessa API
public class EventController {

    @Autowired
    EventRepository eventRepository;

    @GetMapping("/events")
    @Operation(summary="Retorna lista de eventos")
    public List<Event> listaEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/events/{id}")
    @Operation(summary="Retorna evento unico")
    public Event listaEventUnico(@PathVariable(value="id") long id) { return eventRepository.findById(id); }

    @PostMapping("/event")
    @Operation(summary="Salve um usuario")
    public Event inserirEvent(@RequestBody Event newEvent) {
        return eventRepository.save(newEvent);
    }

    @DeleteMapping("/event")
    @Operation(summary="Deleta um usuario")
    public void deleteEvent(@RequestBody Event event) {
        eventRepository.delete(event);
    }

    @PutMapping("/event")
    @Operation(summary="Atualiza um usuario")
    public Event atualizaEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

}

