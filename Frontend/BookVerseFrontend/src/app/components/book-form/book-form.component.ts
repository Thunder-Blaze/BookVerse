import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  isEditMode = false;
  bookId?: number;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      available: [true]
    });
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    if (this.bookId) {
      this.isEditMode = true;
      this.loadBook(this.bookId);
    }
  }

  loadBook(id: number): void {
    this.booksService.getBookById(id).subscribe({
      next: (book) => {
        this.bookForm.patchValue(book);
      },
      error: (error) => {
        this.errorMessage = 'Error loading book. Please try again later.';
        console.error('Error loading book:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      
      if (this.isEditMode && this.bookId) {
        this.booksService.updateBook(this.bookId, bookData).subscribe({
          next: () => {
            this.router.navigate(['/books']);
          },
          error: (error) => {
            this.errorMessage = 'Error updating book. Please try again later.';
            console.error('Error updating book:', error);
          }
        });
      } else {
        this.booksService.addBook(bookData).subscribe({
          next: () => {
            this.router.navigate(['/books']);
          },
          error: (error) => {
            this.errorMessage = 'Error adding book. Please try again later.';
            console.error('Error adding book:', error);
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/books']);
  }
} 