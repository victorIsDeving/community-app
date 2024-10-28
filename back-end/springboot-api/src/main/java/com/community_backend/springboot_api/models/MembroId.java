package com.community_backend.springboot_api.models;

import java.io.Serializable;
import java.util.Objects;

public class MembroId implements Serializable {

    private Long usuarioId;
    private Long grupoId;

    // Construtor padrão
    public MembroId() {}

    public MembroId(Long usuarioId, Long grupoId) {
        this.usuarioId = usuarioId;
        this.grupoId = grupoId;
    }

    // Getters e Setters
    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getGrupoId() {
        return grupoId;
    }

    public void setGrupoId(Long grupoId) {
        this.grupoId = grupoId;
    }

    // equals e hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MembroId that = (MembroId) o;
        return Objects.equals(usuarioId, that.usuarioId) && Objects.equals(grupoId, that.grupoId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(usuarioId, grupoId);
    }
}
