package com.community_backend.springboot_api.models;

import java.io.Serializable;
import jakarta.persistence.*;

@Entity
@Table(name="TB_USERS")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    // id + generated value = bd vai criar os ids automaticamente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String email;
    private long nusp;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getNusp() {
        return nusp;
    }

    public void setNusp(long nusp) {
        this.nusp = nusp;
    }
}
