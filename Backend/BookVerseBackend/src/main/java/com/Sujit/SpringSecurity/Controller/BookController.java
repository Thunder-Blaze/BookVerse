package com.Sujit.SpringSecurity.Controller;

import com.Sujit.SpringSecurity.Model.BookModel;
import com.Sujit.SpringSecurity.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/addBook")
    public BookModel addBook(@RequestBody BookModel book) {
        return bookService.addBook(book);
    }

    @GetMapping("/books")
    public List<BookModel> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/books/{id}")
    public BookModel getBookById(@PathVariable int id) {
        return bookService.getBookById(id);
    }

    @PutMapping("/updateBook/{id}")
    public BookModel updateBook(@PathVariable int id, @RequestBody BookModel book) {
        return bookService.updateBook(id, book);
    }

    @DeleteMapping("/deleteBook/{id}")
    public String deleteBook(@PathVariable int id) {
        return bookService.deleteBook(id);
    }

    @GetMapping("/books/search")
    public List<BookModel> searchBooks(@RequestParam String keyword) {
        return bookService.searchBooks(keyword);
    }

    @PostMapping("/issueBook/{id}")
    public String issueBook(@PathVariable int id, @RequestParam String user, @RequestParam String returnBy) {
        return bookService.issueBook(id, user, returnBy);
    }

    @PostMapping("/returnBook/{id}")
    public String returnBook(
            @PathVariable int id,
            @RequestParam boolean late,
            @RequestParam(defaultValue = "0") int daysLate) {
        return bookService.returnBook(id, late, daysLate);
    }

    @GetMapping("/books/available")
    public List<BookModel> getAvailableBooks() {
        return bookService.getAvailableBooks();
    }

    @GetMapping("/books/issued")
    public List<BookModel> getIssuedBooks() {
        return bookService.getIssuedBooks();
    }

    @GetMapping("/books/issuedTo")
    public List<BookModel> getBooksIssuedTo(@RequestParam String user) {
        return bookService.getBooksIssuedTo(user);
    }
}
