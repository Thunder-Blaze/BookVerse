package com.Sujit.SpringSecurity.Service;

import com.Sujit.SpringSecurity.Model.UserPrincipal;
import com.Sujit.SpringSecurity.Model.Users;
import com.Sujit.SpringSecurity.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        // Users user = repo.findByUsername(username);
        Users user = repo.findByEmail(email);
        if(user==null){
            System.out.println("User not found!!");
            throw new UsernameNotFoundException("User not found");
        }

        return new UserPrincipal(user);
    }

}
