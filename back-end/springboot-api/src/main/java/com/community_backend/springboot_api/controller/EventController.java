package com.community_backend.springboot_api.controller;

import com.community_backend.springboot_api.models.Event;
import com.community_backend.springboot_api.services.EventService; // Importa o serviço
import com.community_backend.springboot_api.repository.EventRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@Tag(name = "Events", description = "API REST for managing Events")
@CrossOrigin(origins = "*") // liberar todos os domínios para acesso dessa API
public class EventController {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    EventService eventService; // Injetar o serviço para as operações

    @GetMapping("/events")
    @Operation(summary = "Retorna lista de eventos")
    public List<Event> listaEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/events/{id}")
    @Operation(summary = "Retorna evento unico")
    public Event listaEventUnico(@PathVariable(value = "id") long id) {
        return eventRepository.findById(id);
    }

    @PostMapping("/event")
    @Operation(summary = "Salve um evento")
    public Event inserirEvent(@RequestBody( description = "Event to create", required = true,
        content = @Content(
            examples = @ExampleObject(
                name = "Exemplo de Evento",
                value = "{\n" +
                        "  \"id\": 0,\n" +
                        "  \"nome\": \"Clube do Livro\",\n" +
                        "  \"imagem\": \"string\",\n" +
                        "  \"descricao\": \"Tipo um Clube da Luta, mas que as pessoas se batem com livros. Recomendamos que venha com um de capa dura.\",\n" +
                        "  \"latitude\": -23.48361989845623,\n" +
                        "  \"longitude\": -46.501843057946786,\n" +
                        "  \"horaInicio\": \"15:00:00\",\n" +
                        "  \"horaFim\": \"16:30:00\",\n" +
                        "  \"data\": \"2024-11-26\",\n" +
                        "  \"visibilidade\": \"string\",\n" +
                        "  \"usersAdministrators\": [\n" +
                        "    {\n" +
                        "      \"id\": 1\n" +
                        "    }\n" +
                        "  ],\n" +
                        "  \"usersParticipants\": [\n" +
                        "    {\n" +
                        "      \"id\": 1\n" +
                        "    }\n" +
                        "  ]\n" +
                        "}"
            )
        )) Event newEvent) {
        return eventRepository.save(newEvent);
    }

    @DeleteMapping("/event")
    @Operation(summary = "Deleta um evento")
    public void deleteEvent(@RequestBody Event event) {
        eventRepository.delete(event);
    }

    @PutMapping("/event")
    @Operation(summary = "Atualiza um evento")
    public Event atualizaEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    // Novo endpoint: Adicionar participante a um evento
    @PostMapping("/events/{eventId}/participants/{userId}")
    @Operation(summary = "Adiciona um participante ao evento")
    public void addParticipantToEvent(
            @PathVariable Long eventId,
            @PathVariable Long userId
    ) {
        eventService.addParticipant(eventId, userId);
    }

    // Novo endpoint: Adicionar administrador a um evento
    @PostMapping("/events/{eventId}/administrators/{userId}")
    @Operation(summary = "Adiciona um administrador ao evento")
    public void addAdministratorToEvent(
            @PathVariable Long eventId,
            @PathVariable Long userId
    ) {
        eventService.addAdministrator(eventId, userId);
    }
}
