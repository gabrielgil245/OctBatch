import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  isViewable: boolean = true;

  courses: string[] = ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'];

  users: any [] = [{name: 'John', age: 28}, {name: 'Jane', age: 33}, {name: 'Bob', age: 45}]

  choice: number = 0;

  colorName: string = 'green';

  bgColor: string = 'yellow';

  fontSize: string = '30px';

  styleObject: any = {
    color: 'blue',
    backgroundColor: 'red',
    fontSize: '30px'
  }

  applyClass1: boolean = true;
  applyClass2: boolean = true;
}
