import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  empData:any=[];

  constructor(private operations:OperationService) { 

    this.operations.getAll().subscribe(data=>{
      console.log(data);
      this.empData=data;
    })
  }

  ngOnInit(): void {
  }

}
