package com.Sujit.SpringSecurity.Config;

import com.Sujit.SpringSecurity.Model.Books;
import com.Sujit.SpringSecurity.Model.Users;
import com.Sujit.SpringSecurity.Repository.BooksRepository;
import com.Sujit.SpringSecurity.Repository.UsersRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private BooksRepository booksRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) {
        try {
            initializeUsers();
            initializeBooks();
            logger.info("Data initialization completed successfully");
        } catch (Exception e) {
            logger.error("Error during data initialization: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to initialize data", e);
        }
    }

    private void initializeUsers() {
        try {
            // Create default admin user
            if (usersRepository.findByEmail("admin@bookverse.com").isEmpty()) {
                Users admin = new Users();
                admin.setName("Admin User");
                admin.setEmail("admin@bookverse.com");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRole("admin");
                usersRepository.save(admin);
                logger.info("Created default admin user");
            }

            // Create default regular user
            if (usersRepository.findByEmail("user@bookverse.com").isEmpty()) {
                Users user = new Users();
                user.setName("Regular User");
                user.setEmail("user@bookverse.com");
                user.setPassword(passwordEncoder.encode("user123"));
                user.setRole("user");
                usersRepository.save(user);
                logger.info("Created default regular user");
            }
        } catch (Exception e) {
            logger.error("Error initializing users: {}", e.getMessage(), e);
            throw e;
        }
    }

    private void initializeBooks() {
        try {
            // Add some default books if none exist
            if (booksRepository.count() == 0) {
                Books book1 = createBook(
                    "The Great Gatsby",
                    "F. Scott Fitzgerald",
                    "Classic",
                    "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
                    true
                );
                booksRepository.save(book1);

                Books book2 = createBook(
                    "To Kill a Mockingbird",
                    "Harper Lee",
                    "Fiction",
                    "The story of racial injustice and the loss of innocence in the American South.",
                    true
                );
                booksRepository.save(book2);

                Books book3 = createBook(
                    "1984",
                    "George Orwell",
                    "Dystopian",
                    "A dystopian social science fiction novel and cautionary tale.",
                    true
                );
                booksRepository.save(book3);

                logger.info("Created default books");
            }
        } catch (Exception e) {
            logger.error("Error initializing books: {}", e.getMessage(), e);
            throw e;
        }
    }

    private Books createBook(String title, String author, String genre, String description, boolean available) {
        Books book = new Books();
        book.setTitle(title);
        book.setAuthor(author);
        book.setGenre(genre);
        book.setDescription(description);
        book.setAvailable(available);
        return book;
    }
} 