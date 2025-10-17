import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  departments: any[] = [
    {id: 1, name: 'HR'},
    {id: 2, name: 'Sales'},
    {id: 3, name: 'Marking'},
    {id: 4, name: 'Finance'}
  ];

  constructor(private router: Router) { }

  onSelect(department: any) {
    this.router.navigate(['/department', department.id]);
  }
}
