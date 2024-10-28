package com.community_backend.springboot_api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_MEMBROS")
@IdClass(MembroId.class)
public class Membro {

    @Id
    @ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private User usuario;

    @Id
    @ManyToOne
    @JoinColumn(name = "grupo_id", referencedColumnName = "id")
    private Group grupo;

    // Construtor padrão, Getters e Setters
    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }

    public Group getGrupo() {
        return grupo;
    }

    public void setGrupo(Group grupo) {
        this.grupo = grupo;
    }
}
