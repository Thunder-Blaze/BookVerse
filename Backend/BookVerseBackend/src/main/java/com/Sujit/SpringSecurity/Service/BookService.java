package com.Sujit.SpringSecurity.Service;

import com.Sujit.SpringSecurity.Model.BookModel;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class BookService {

    private final List<BookModel> books = new ArrayList<>();
    private final AtomicInteger idGenerator = new AtomicInteger(1);

    public BookModel addBook(BookModel book) {
        book.setId(idGenerator.getAndIncrement());
        book.setIssuedTo("");
        book.setReturnBy("");
        book.setFine("0");
        books.add(book);
        return book;
    }

    public List<BookModel> getAllBooks() {
        return books;
    }

    public BookModel getBookById(int id) {
        return books.stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public List<BookModel> getAvailableBooks() {
        return books.stream()
                .filter(book -> book.getIssuedTo() == null || book.getIssuedTo().isBlank())
                .collect(Collectors.toList());
    }

    public List<BookModel> getIssuedBooks() {
        return books.stream()
                .filter(book -> book.getIssuedTo() != null && !book.getIssuedTo().isBlank())
                .collect(Collectors.toList());
    }

    public String issueBook(int id, String user, String returnBy) {
        BookModel book = getBookById(id);
        if (book == null) return "Book not found.";
        if (book.getIssuedTo() != null && !book.getIssuedTo().isBlank())
            return "Book already issued to " + book.getIssuedTo();
        book.setIssuedTo(user);
        book.setReturnBy(returnBy);
        return "Book issued to " + user;
    }

    public String returnBook(int id, boolean late, int daysLate) {
        BookModel book = getBookById(id);
        if (book == null) return "Book not found.";
        if (book.getIssuedTo() == null || book.getIssuedTo().isBlank()) return "Book is not issued.";

        if (late) {
            int fine = daysLate * 10; // ₹10/day fine
            book.setFine(String.valueOf(fine));
        } else {
            book.setFine("0");
        }

        book.setIssuedTo("");
        book.setReturnBy("");
        return "Book returned. Fine: ₹" + book.getFine();
    }

    public String deleteBook(int id) {
        BookModel book = getBookById(id);
        if (book != null && books.remove(book)) return "Book deleted.";
        return "Book not found.";
    }

    public BookModel updateBook(int id, BookModel updated) {
        BookModel book = getBookById(id);
        if (book != null) {
            book.setName(updated.getName());
            book.setImageBase64(updated.getImageBase64());
        }
        return book;
    }

    public List<BookModel> searchBooks(String keyword) {
        return books.stream()
                .filter(book -> book.getName().toLowerCase().contains(keyword.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<BookModel> getBooksIssuedTo(String user) {
        return books.stream()
                .filter(book -> user.equalsIgnoreCase(book.getIssuedTo()))
                .collect(Collectors.toList());
    }
}
