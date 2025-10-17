import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;
  
  title: string = 'Hey I am from Parent Component!';

  parentTitle: string = '';

  receiveData(data: string) {
    this.parentTitle = data;
    setTimeout(() => {
      this.child.showData();
    }, 0);
  }
}
