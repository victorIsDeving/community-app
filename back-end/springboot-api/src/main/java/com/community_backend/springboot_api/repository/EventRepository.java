package com.community_backend.springboot_api.repository;

import com.community_backend.springboot_api.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository para usar métodos prontos
public interface EventRepository extends JpaRepository<Event, Long> {

    Event findById(long id);

}
