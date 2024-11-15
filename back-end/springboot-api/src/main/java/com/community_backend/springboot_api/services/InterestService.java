package com.community_backend.springboot_api.services;

import com.community_backend.springboot_api.models.Event;
import com.community_backend.springboot_api.models.Interest;
import com.community_backend.springboot_api.models.User;
import com.community_backend.springboot_api.repository.EventRepository;
import com.community_backend.springboot_api.repository.InterestRepository;
import com.community_backend.springboot_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InterestService {

    @Autowired
    private InterestRepository interestRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    // Criar ou atualizar um interesse
    public Interest saveInterest(Interest interest) {
        return interestRepository.save(interest);
    }

    // Listar todos os interesses
    public List<Interest> getAllInterests() {
        return interestRepository.findAll();
    }

    // Obter um interesse por nome
    public Optional<Interest> getInterestByName(String interesse) {
        return interestRepository.findById(interesse);
    }

    // Deletar um interesse
    public void deleteInterest(String interesse) {
        interestRepository.deleteById(interesse);
    }

    // Adicionar um interesse a um evento
    public void addInterestToEvent(String interesse, Long eventId) {
        // Primeiro, buscamos o interesse pelo nome
        Optional<Interest> interestOpt = interestRepository.findById(interesse);
        if (interestOpt.isPresent()) {
            Interest interest = interestOpt.get();

            // Buscamos o evento pelo ID
            Event event = eventRepository.findById(eventId)
                    .orElseThrow(() -> new RuntimeException("Event not found"));

            // Adicionamos o evento à lista de eventos do interesse
            if (!interest.getInterestEvent().contains(event)) {
                interest.getInterestEvent().add(event);
                interestRepository.save(interest); // Salva o interesse, atualizando a tabela intermediária
            } else {
                throw new RuntimeException("Event already associated with the interest");
            }
        } else {
            throw new RuntimeException("Interest not found");
        }
    }

    // Adicionar um interesse a um usuário
    public void addInterestToUser(String interesse, Long userId) {
        // Primeiro, buscamos o interesse pelo nome
        Optional<Interest> interestOpt = interestRepository.findById(interesse);
        if (interestOpt.isPresent()) {
            Interest interest = interestOpt.get();

            // Buscamos o usuário pelo ID
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Adicionamos o usuário à lista de usuários do interesse
            if (!interest.getInterestUser().contains(user)) {
                interest.getInterestUser().add(user);
                interestRepository.save(interest); // Salva o interesse, atualizando a tabela intermediária
            } else {
                throw new RuntimeException("User already associated with the interest");
            }
        } else {
            throw new RuntimeException("Interest not found");
        }
    }

}
