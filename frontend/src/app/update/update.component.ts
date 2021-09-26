import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  Employee = {
    id: '',
    lastName: '',
    firstName: '',
    salary: '',
    department: ''
   };

  constructor(private operations: OperationService) { }

  ngOnInit(): void {
  }

  updateEmployee(): void {
    const data = {
      id: this.Employee.id,
      last_name: this.Employee.lastName,
      first_name: this.Employee.firstName,
      salary: this.Employee.salary,
      dept: this.Employee.department
    };

    this.operations.update(data.id ,data).subscribe(response =>{
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }


}
