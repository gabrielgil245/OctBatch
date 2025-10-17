import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childTitle: string = '';

  @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();

  sendData() {
    this.childEvent.emit('Hello Parent! This is the Child component!');
  }

  showData() {
    alert("Demonstration of ViewChild decorator!");
  }

  showExportAsData() {
    alert("Demonstration of exportAs!");
  }
}
