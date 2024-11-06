package com.community_backend.springboot_api.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "TB_INTERESTS")
public class Interest implements Serializable {

    @Id
    @Column(name = "interesse")
    private String interesse;

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

    public void setInteresse(String interesse) {
        this.interesse = interesse;
    }
    public String getInteresse() {
        return interesse;
    }

}
