import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  errorMessage: string = '';

  constructor(
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.booksService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (error) => {
        this.errorMessage = 'Error loading books. Please try again later.';
        console.error('Error loading books:', error);
      }
    });
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.booksService.deleteBook(id).subscribe({
        next: () => {
          this.loadBooks();
        },
        error: (error) => {
          this.errorMessage = 'Error deleting book. Please try again later.';
          console.error('Error deleting book:', error);
        }
      });
    }
  }

  addNewBook(): void {
    this.router.navigate(['/books/add']);
  }
} 