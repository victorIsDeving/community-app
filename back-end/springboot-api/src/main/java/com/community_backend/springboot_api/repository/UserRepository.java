package com.community_backend.springboot_api.repository;

import com.community_backend.springboot_api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository para usar métodos prontos
public interface UserRepository extends JpaRepository<User, Long> {


}
