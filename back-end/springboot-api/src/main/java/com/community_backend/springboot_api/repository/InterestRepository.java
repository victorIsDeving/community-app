package com.community_backend.springboot_api.repository;

import com.community_backend.springboot_api.models.Interest;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository para usar métodos prontos
public interface InterestRepository extends JpaRepository<Interest, String> {

    //Interest findById(String interesse);

}
