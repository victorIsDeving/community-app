package com.community_backend.springboot_api.models;

import java.io.Serializable;
import java.util.Objects;

public class  implements Serializable {

    private Long usuarioId;
    private Long eventoId;

    // Construtor padrão
    public AdministradorId() {}

    public AdministradorId(Long usuarioId, Long eventoId) {
        this.usuarioId = usuarioId;
        this.eventoId = eventoId;
    }

    // Getters e Setters
    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getEventoId() {
        return eventoId;
    }

    public void setEventoId(Long eventoId) {
        this.eventoId = eventoId;
    }

    // equals e hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AdministradorId that = (AdministradorId) o;
        return Objects.equals(usuarioId, that.usuarioId) && Objects.equals(eventoId, that.eventoId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(usuarioId, eventoId);
    }
}
