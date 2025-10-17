import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent {
  
  books: any[] = [];

  constructor(private bookService: BookService) { }

  showBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = [];
        this.books = data;
      },
      error: () => {
        console.error('An error has occurred!');
      }
    })
  }
  
  /*
    Create or use an existing component.
    Add Reactive form with form controls of ID and Name.
    Create a method in Books service { return this.http.post(url, body) }
    In the component, subscribe to the service method.
  */
}
