import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Employee = {
   lastName: '',
   firstName: '',
   salary: '',
   department: ''
  };
  submitted = false;

  constructor(private operations: OperationService) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    const data = {
      last_name: this.Employee.lastName,
      first_name: this.Employee.firstName,
      salary: this.Employee.salary,
      dept: this.Employee.department
    };

    this.operations.create(data).subscribe(response =>{
      console.log(response);
      this.submitted=true;
    },
    error => {
      console.log(error);
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.Employee = {
      lastName: '',
      firstName: '',
      salary: '',
      department: ''
    }
  }

}
