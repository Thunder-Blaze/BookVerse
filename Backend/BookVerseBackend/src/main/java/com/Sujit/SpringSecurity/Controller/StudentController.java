package com.Sujit.SpringSecurity.Controller;

import com.Sujit.SpringSecurity.Model.Student;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5500")
@RestController
public class StudentController {


    private List <Student> students = new ArrayList<>(List.of(
            new Student(1,"Sujit",70),
            new Student(2,"Vineet",80)
    ));

    @GetMapping("/students")
    public List<Student> getStudents(){
        return students;
    }

    @GetMapping("/csrf-token")
    public CsrfToken getCsrfToken(HttpServletRequest request){ //Method to get the CSRF Token number...
        return (CsrfToken) request.getAttribute("_csrf");
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student){
        students.add(student);
        return student;
    }
}
