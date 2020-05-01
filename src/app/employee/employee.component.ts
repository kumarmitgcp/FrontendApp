import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Observable<Employee[]>; 
  
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {   

    this.allEmployees = this.employeeService.getAllEmployee();   

  }

}
