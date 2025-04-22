package com.Sujit.SpringSecurity.Controller;

import com.Sujit.SpringSecurity.Model.Users;
import com.Sujit.SpringSecurity.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5500")
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public Users register(@RequestBody Users user){
        return service.register(user);

    }

    @PostMapping("/login")
    public String login(@RequestBody Users user){
        return service.verify(user);
    }

}
