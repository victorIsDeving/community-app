package com.community_backend.springboot_api.services;

import com.community_backend.springboot_api.models.Event;
import com.community_backend.springboot_api.models.User;
import com.community_backend.springboot_api.repository.EventRepository;
import com.community_backend.springboot_api.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final UserRepository userRepository;

    public EventService(EventRepository eventRepository, UserRepository userRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }

    // Adicionar participante ao evento
    public void addParticipant(Long eventId, Long userId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        event.getUsersParticipants().add(user); // Adiciona na relação ManyToMany de participantes
        eventRepository.save(event); // Salva no banco
    }

    // Adicionar administrador ao evento
    public void addAdministrator(Long eventId, Long userId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        event.getUsersAdministrators().add(user); // Adiciona na relação ManyToMany de administradores
        eventRepository.save(event); // Salva no banco
    }
}
