package com.community_backend.springboot_api.models;

import java.io.Serializable;
import java.util.Objects;

public class TagEventId implements Serializable {

    private Long eventoId;
    private String tag;

    // Construtor padrão
    public TagEventId() {}

    public TagEventId(Long eventoId, String tag) {
        this.eventoId = eventoId;
        this.tag = tag;
    }

    // Getters e Setters
    public Long getEventoId() {
        return eventoId;
    }

    public void setEventoId(Long eventoId) {
        this.eventoId = eventoId;
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
        TagEventId that = (TagEventId) o;
        return Objects.equals(eventoId, that.eventoId) && Objects.equals(tag, that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventoId, tag);
    }
}
