package com.community_backend.springboot_api.models;

import java.io.Serializable;
import java.util.Objects;

public class TagUserId implements Serializable {

    private Long usuarioId;
    private String tag;

    // Construtor padrão
    public TagUserId() {}

    public TagUserId(Long usuarioId, String tag) {
        this.usuarioId = usuarioId;
        this.tag = tag;
    }

    // Getters e Setters
    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    // equals e hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TagUserId that = (TagUserId) o;
        return Objects.equals(usuarioId, that.usuarioId) && Objects.equals(tag, that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(usuarioId, tag);
    }
}
