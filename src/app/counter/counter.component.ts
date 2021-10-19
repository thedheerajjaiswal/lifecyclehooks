import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  message: string = '';
  count: number = 0;

  @Input() forcount: String;
  constructor() {}

  ngOnInit(): void {}

  incrementbyone() {
    this.count = this.count + 1;
    this.message = 'Counter : ' + this.count;
  }
  decrementbyone() {
    this.count = this.count - 1;
    this.message = 'Counter : ' + this.count;
  }
}
