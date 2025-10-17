import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books = [
    { title: 'Book One', author: 'Author One', year: 2001 },
    { title: 'Book Two', author: 'Author Two', year: 2002 },
    { title: 'Book Three', author: 'Author Three', year: 2003 }
  ]
  
  constructor() { }
}
