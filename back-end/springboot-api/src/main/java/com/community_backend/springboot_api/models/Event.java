package com.community_backend.springboot_api.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "TB_EVENTS")
public class Event implements Serializable {

    private static final long serialVersionUID = 1L;

    public Event() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @JsonProperty("nome")
    @Column(name = "nome")
    private String nome;

    @Column(name = "imagem")
    private String imagem;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "endereco")
    private String endereco;

    @Column(name = "latitude")
    private Long latitude;

    @Column(name = "longitude")
    private Long longitude;

    @JsonFormat(pattern = "HH:mm:ss")
    @Column(name = "horaInicio")
    private LocalTime horaInicio;

    @JsonFormat(pattern = "HH:mm:ss")
    @Column(name = "horaFim")
    private LocalTime horaFim;

    @JsonProperty("data")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "data")
    private LocalDate data;

    @Column(name = "visibilidade")
    private String visibilidade;

//    @ManyToMany
//    @JoinTable(
//            name = "tb_event_participants",
//            joinColumns = @JoinColumn(name = "event_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private List<User> users_participants;

//    @ManyToMany
//    @JoinTable(
//            name = "tb_event_administrators",
//            joinColumns = @JoinColumn(name = "event_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private List<User> users_administrators;

//    @ManyToMany(mappedBy = "interest_event")
//    private List<Interest> interests_event;

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", data=" + data +
                ", horaInicio=" + horaInicio +
                ", horaFim=" + horaFim +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", imagem='" + imagem + '\'' +
                ", visibilidade='" + visibilidade + '\'' +
                '}';
    }

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

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() { return descricao; }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getEndereco() { return endereco; }

    public void setEndereco(String endereco) { this.endereco = endereco; }

    public Long getLatitude() {
        return latitude;
    }

    public void setLatitude(Long latitude) {
        this.latitude = latitude;
    }

    public Long getLongitude() {
        return longitude;
    }

    public void setLongitude(Long longitude) {
        this.longitude = longitude;
    }

    public LocalTime getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(LocalTime horaInicio) {
        this.horaInicio = horaInicio;
    }

    public LocalTime getHoraFim() {
        return horaFim;
    }

    public void setHoraFim(LocalTime horaFim) {
        this.horaFim = horaFim;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getVisibilidade() {
        return visibilidade;
    }

    public void setVisibilidade(String visibilidade) {
        this.visibilidade = visibilidade;
    }

//    public List<User> getUsersParticipants() {
//        return users_participants;
//    }
//
//    public void setUsersParticipants(List<User> users_participants) {
//        this.users_participants = users_participants;
//    }
//
//    public List<User> getUsersAdministrators() {
//        return users_administrators;
//    }
//
//    public void setUsersAdministrators(List<User> users_administrators) {
//        this.users_administrators = users_administrators;
//    }
//
//    public List<Interest> getInterestsEvent() {
//        return interests_event;
//    }
//
//    public void setInterestsEvent(List<Interest> interests_event) {
//        this.interests_event = interests_event;
//    }
}
