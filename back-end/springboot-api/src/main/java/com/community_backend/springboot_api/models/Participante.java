package com.community_backend.springboot_api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_PARTICIPANTES")
@IdClass(ParticipanteId.class)
public class Participantes {

    @Id
    @ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private User usuario;

    @Id
    @ManyToOne
    @JoinColumn(name = "evento_id", referencedColumnName = "id")
    private Event evento;

    // Construtor padrão, Getters e Setters
    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }

    public Event getEvento() {
        return evento;
    }

    public void setEvento(Event evento) {
        this.evento = evento;
    }
}
