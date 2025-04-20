package com.Sujit.SpringSecurity.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5500")
@RestController
public class HomeController {

    @GetMapping("/")
    public String greet(){
        return "Welcome!!!!";
    }

}
