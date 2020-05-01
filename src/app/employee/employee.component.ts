import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Emp } from '../emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Observable<Employee[]>; 
  allEmp: Emp[];
  titles: string[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {

    this.allEmp = [
      {
        "id": 1,
        "name": "test1",        
      },
      {
        "id": 2,
        "name": "test2",
      }
    ]

    this.allEmployees = this.employeeService.getAllEmployee();
    //this.titles = ["test1","test2","test3","test4","test5","test6"]

  }

}
