package com.community_backend.springboot_api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_TAG_EVENT")
@IdClass(TagEventId.class)
public class TagEvent {

    @Id
    @ManyToOne
    @JoinColumn(name = "evento_id", referencedColumnName = "id")
    private Event evento;

    @Id
    private String tag;

    // Construtor padrão, Getters e Setters
    public Event getEvento() {
        return evento;
    }

    public void setEvento(Event evento) {
        this.evento = evento;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
