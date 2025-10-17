import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  departmentId: string | null = '';
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.departmentId = this.route.snapshot.paramMap.get('id');
  }
}
