package com.Sujit.SpringSecurity.Repository;

import com.Sujit.SpringSecurity.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users,Integer> {

    // Users findByUsername(String Username);
    Users findByEmail(String email);
}
