import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css'],
})
export class CounterParentComponent implements OnInit {
  // @ViewChild(CounterComponent) counterComponent: CounterComponent;
  // @ViewChildren(CounterComponent) counterComponent: QueryList<CounterComponent>;
  // constructor(private cd: ChangeDetectorRef) {}

  // @ContentChild(CounterComponent) counterComponent: CounterComponent;
  @ContentChildren(CounterComponent)
  counterComponent: QueryList<CounterComponent>;
  constructor() {}

  ngOnInit(): void {}

  increase() {
    // this.counterComponent.incrementbyone();
    // this.counterComponent.first.incrementbyone();
    // this.counterComponent.last.incrementbyone();
    this.counterComponent.forEach((el) => el.incrementbyone());
  }
  decrease() {
    // this.counterComponent.decrementbyone();
    // this.counterComponent.first.decrementbyone();
    // this.counterComponent.last.decrementbyone();
    this.counterComponent.forEach((el) => el.decrementbyone());
  }

  ngAfterContentInit() {
    // this.counterComponent.message = 'Counter:0';
    // this.counterComponent.first.message = 'Counter:0';
    // this.counterComponent.last.message = 'Counter:0';
    this.counterComponent.forEach((el) => (el.message = 'Cointer : 0'));
  }

  // increase() {
  //   ////@ViewChild
  //   // this.counterComponent.incrementbyone()
  //   ////@ViewChildreen
  //   // this.counterComponent.first.incrementbyone();
  //   // this.counterComponent.last.incrementbyone();
  //   this.counterComponent.forEach((el) => el.incrementbyone());
  //   // this.counterComponent.find((el) => el.forcount === 'Sale').incrementbyone();

  //   // this.counterComponent
  //   // .filter((el) => el.forcount === 'Quality')
  //   //  .forEach((el) => el.incrementbyone());

  //   // console.log(this.counterComponent.map((el) => el.forcount));
  // }
  // decrease() {
  //   ////@ViewChild
  //   // this.counterComponent.decrementbyone();
  //   ////@ViewChildreen
  //   // this.counterComponent.first.decrementbyone();
  //   // this.counterComponent.last.decrementbyone();
  //   this.counterComponent.forEach((el) => el.decrementbyone());
  //   // this.counterComponent.find((el) => el.forcount === 'Sale').decrementbyone();
  //   // this.counterComponent
  //   //   .filter((el) => el.forcount === 'Quality')
  //   //   .forEach((el) => el.decrementbyone());
  //   // console.log(this.counterComponent.map((el) => el.forcount));
  // }
  // ngAfterViewInit() {
  //   this.counterComponent.forEach((el) => (el.message = 'Counter : 0'));
  //   console.log(this.counterComponent.length);
  //   this.cd.detectChanges();
  // }
}
