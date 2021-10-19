import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  //myFriends: any[] = ['Dheeraj', 'Momo'];

  constructor() {
    // console.log('ParentComponent constructor Called');
  }
  // ngOnChanges() {
  //   console.log('ParentComponent ngOnChanges Called');
  // }

  ngOnInit(): void {
    // console.log('ParentComponent ngOnInit Called');
  }
  // ngDoCheck() {
  //   console.log('ParentComponent ngDoCheck Called');
  // }

  // addFriends() {
  //   this.myFriends.push('Rahul');
  // }

  // isShown: boolean = true;
  // toggle() {
  //   this.isShown = !this.isShown;
  // }
}
