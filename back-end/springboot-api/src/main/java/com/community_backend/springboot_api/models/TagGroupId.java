package com.community_backend.springboot_api.models;

import java.io.Serializable;
import java.util.Objects;

public class TagGroupId implements Serializable {

    private Long grupoId;
    private String tag;

    // Construtor padrão
    public TagGroupId() {}

    public TagGroupId(Long grupoId, String tag) {
        this.grupoId = grupoId;
        this.tag = tag;
    }

    // Getters e Setters
    public Long getGrupoId() {
        return grupoId;
    }

    public void setGrupoId(Long grupoId) {
        this.grupoId = grupoId;
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
        TagGroupId that = (TagGroupId) o;
        return Objects.equals(grupoId, that.grupoId) && Objects.equals(tag, that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(grupoId, tag);
    }
}
