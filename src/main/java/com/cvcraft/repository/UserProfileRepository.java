package com.cvcraft.repository;

import java.util.Optional;

import com.cvcraft.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
    Optional<UserProfile> findByUserName(String username);
}
