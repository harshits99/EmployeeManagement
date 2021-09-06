import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  currentEmployee = null;

  Employee = {
    id: ''
  }

  constructor(
    private operations:OperationService) { }

  ngOnInit(): void {
    // this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }


  // getEmployee(id:any): void {
  //   this.operations.get(id)
  //   .subscribe(
  //     data => {
  //       this.currentEmployee = data;
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  deleteEmployee(): void {
    const data = {
      id: this.Employee.id
    };

    this.operations.delete(data.id).subscribe(response =>{
      console.log(response);
    },
    error => {
      console.log(error);
    });

  }

}
