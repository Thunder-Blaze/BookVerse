package com.Sujit.SpringSecurity.Repository;

import com.Sujit.SpringSecurity.Model.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Books, Long> {
} 