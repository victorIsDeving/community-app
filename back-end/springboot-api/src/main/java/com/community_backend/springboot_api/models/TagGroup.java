package com.community_backend.springboot_api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_TAG_GROUP")
@IdClass(TagGroupId.class)
public class TagGroup {

    @Id
    @ManyToOne
    @JoinColumn(name = "grupo_id", referencedColumnName = "id")
    private Group grupo;

    @Id
    private String tag;

    // Construtor padrão, Getters e Setters
    public Group getGrupo() {
        return grupo;
    }

    public void setGrupo(Group grupo) {
        this.grupo = grupo;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
