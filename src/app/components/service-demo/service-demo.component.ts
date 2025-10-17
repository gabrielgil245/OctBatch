import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent {

  books: any[] = [];
  
  constructor(private data: DataService) {
    this.books = this.data.books;
  }
}
