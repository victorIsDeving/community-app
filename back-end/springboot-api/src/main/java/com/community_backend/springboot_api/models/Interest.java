package com.community_backend.springboot_api.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "TB_INTERESTS")
public class Interest implements Serializable {

    @Id
    @Column(name = "interesse", nullable = false)
    private String interesse; // Usando o campo 'interesse' como chave primária

    @ManyToMany
    @JoinTable(
            name = "tb_interest_event",
            joinColumns = @JoinColumn(name = "interesse"),
            inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private List<Event> interest_event;

    @ManyToMany
    @JoinTable(
            name = "tb_interest_user",
            joinColumns = @JoinColumn(name = "interesse"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> interest_user;

    // Getters e Setters
    public String getInteresse() {
        return interesse;
    }

    public void setInteresse(String interesse) {
        this.interesse = interesse;
    }

    public List<Event> getInterestEvent() {
        return interest_event;
    }

    public void setInterestEvent(List<Event> interest_event) {
        this.interest_event = interest_event;
    }

    public List<User> getInterestUser() {
        return interest_user;
    }

    public void setInterestUser(List<User> interest_user) {
        this.interest_user = interest_user;
    }
}
