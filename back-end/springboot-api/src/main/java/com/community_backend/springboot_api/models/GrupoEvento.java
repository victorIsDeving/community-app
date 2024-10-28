package com.community_backend.springboot_api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_GRUPO_EVENTO")
@IdClass(GrupoEventoId.class)
public class GrupoEvento {

    @Id
    @ManyToOne
    @JoinColumn(name = "grupo_id", referencedColumnName = "id")
    private Group grupo;

    @Id
    @ManyToOne
    @JoinColumn(name = "evento_id", referencedColumnName = "id")
    private Event evento;

    // Construtor padrão, Getters e Setters
    public Group getGrupo() {
        return grupo;
    }

    public void setGrupo(Group grupo) {
        this.grupo = grupo;
    }

    public Event getEvento() {
        return evento;
    }

    public void setEvento(Event evento) {
        this.evento = evento;
    }
}
