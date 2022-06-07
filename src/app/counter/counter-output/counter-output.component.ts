import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  empData:any = [];
  data: any;
  tableData: any;
  arr: any = [];
  dataVar: any;
  constructor(private store: Store<{empList: {empList: any}}>, private fb: FormBuilder) { 
    this.tableData = this.fb.group({
      id: [''],
      name: [''],
      age: [''],
      adar: [''],
    })
  }

  ngOnInit(): void {
    this.store.select('empList').subscribe((sampleData:any) => {
      this.empData = sampleData.data;
      console.log("empData", this.empData);
    })
  }
  viewDetails(id:any){
    alert(id)
  }
  submit(){
    this.dataVar = this.arr.push(this.tableData);
    console.log("data",this.dataVar);
    
  }

}
