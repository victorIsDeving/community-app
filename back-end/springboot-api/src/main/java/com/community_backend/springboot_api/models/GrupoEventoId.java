package com.community_backend.springboot_api.models;

import java.io.Serializable;
import java.util.Objects;

public class GrupoEventoId implements Serializable {

    private Long grupoId;
    private Long eventoId;

    // Construtor padrão
    public GrupoEventoId() {}

    public GrupoEventoId(Long grupoId, Long eventoId) {
        this.grupoId = grupoId;
        this.eventoId = eventoId;
    }

    // Getters e Setters
    public Long getGrupoId() {
        return grupoId;
    }

    public void setGrupoId(Long grupoId) {
        this.grupoId = grupoId;
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
        GrupoEventoId that = (GrupoEventoId) o;
        return Objects.equals(grupoId, that.grupoId) && Objects.equals(eventoId, that.eventoId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(grupoId, eventoId);
    }
}
