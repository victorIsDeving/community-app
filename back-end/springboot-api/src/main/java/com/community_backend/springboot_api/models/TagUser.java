package com.community_backend.springboot_api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_TAG_USER")
@IdClass(TagUserId.class)
public class TagUser {

    @Id
    @ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private User usuario;

    @Id
    private String tag;

    // Construtor padrão, Getters e Setters
    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
