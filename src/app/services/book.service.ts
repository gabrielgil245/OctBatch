import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly bookListUrl: string = 'http://localhost:3020/bookList';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.bookListUrl);
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.bookListUrl, book);
  }

  updateBook(book: any): Observable<any> {
    return this.http.put<any>(`${this.bookListUrl}/${book.id}`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete<any>(`${this.bookListUrl}/${id}`);
  }
}
