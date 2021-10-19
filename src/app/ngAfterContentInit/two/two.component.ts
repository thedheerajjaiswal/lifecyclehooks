import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  myName: string = 'Dheeraj jaiswal';

  constructor() {}

  ngOnInit(): void {
    // this.myName = 'Dheeraj jaiswal';
  }
  // ngAfterContentInit() {
  //   console.log('Child Component ngAfterContentInit Called');
  // }
}
