import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookForm!: FormGroup;

  responseMessage: string = '';

  isSuccessful: boolean = false;

  constructor(private fb: FormBuilder, private bookService: BookService) { }

  ngOnInit(): void {
    this.initializeBookForm();
  }

  initializeBookForm() {
    this.bookForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  addBook() {
    if (this.bookForm.invalid) return;
    this.responseMessage = '';
    this.isSuccessful = false;

    this.bookService.addBook(this.bookForm?.value).subscribe({
      next: (data) => {
        this.isSuccessful = true;
        this.responseMessage = `Book ${data?.name} was successfully added!`;
        this.initializeBookForm();
      },
      error: (err) => {
        console.error(err);
        this.responseMessage = 'An error occurrred while attempting to add a book.';
      }
    });
  }

  updateBook() {
    if (this.bookForm.invalid) return;
    this.responseMessage = '';
    this.isSuccessful = false;

    this.bookService.updateBook(this.bookForm?.value).subscribe({
      next: (data) => {
        this.isSuccessful = true;
        this.responseMessage = `Book ${data?.name} was successfully updated!`;
        this.initializeBookForm();
      },
      error: (err) => {
        console.error(err);
        this.responseMessage = 'An error occurrred while attempting to update a book.';
      }
    });
  }

  deleteBook() {
    if (this.bookForm.get('id')?.invalid) return;
    this.responseMessage = '';
    this.isSuccessful = false;

    this.bookService.deleteBook(this.bookForm.get('id')?.value).subscribe({
      next: (data) => {
        this.isSuccessful = true;
        this.responseMessage = `Book of ID ${this.bookForm.get('id')?.value} was successfully deleted!`;
        this.initializeBookForm();
      },
      error: (err) => {
        console.error(err);
        this.responseMessage = 'An error occurrred while attempting to delete a book.';
      }
    });
  }
}
