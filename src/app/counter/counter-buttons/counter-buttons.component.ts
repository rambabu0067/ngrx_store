import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  // constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {
  }
  // inc(){
  //   this.store.dispatch(incr());
  // }
  // dec(){
  //   this.store.dispatch(decr());
  // }
}
