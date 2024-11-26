package com.community_backend.springboot_api.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "TB_USERS")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "senha")
    private String senha;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "localizacao")
    private Long localizacao;

    @Column(name = "imagem")
    private String imagem;

    @Column(name = "nusp")
    private Long nusp;

//    @ManyToMany(mappedBy = "users_participants")
//    private List<Event> events_participants;

//    @ManyToMany(mappedBy = "users_administrators")
//    private List<Event> events_administrators;

    @ManyToMany(mappedBy = "interest_user", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Interest> interests_user;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Long getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(Long localizacao) {
        this.localizacao = localizacao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Long getNusp() {
        return nusp;
    }

    public void setNusp(Long nusp) {
        this.nusp = nusp;
    }

//    public List<Event> getEventsParticipants() {
//        return events_participants;
//    }
//
//    public void setEventsParticipants(List<Event> events_participants) {
//        this.events_participants = events_participants;
//    }
//
//    public List<Event> getEventsAdministrators() {
//        return events_administrators;
//    }
//
//    public void setEventsAdministrators(List<Event> events_administrators) {
//        this.events_administrators = events_administrators;
//    }

//    public List<Interest> getInterestsUser() {
//        return interests_user;
//    }
//
//    public void setInterestsUser(List<Interest> interests_user) {
//        this.interests_user = interests_user;
//    }
}
