import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TwoComponent } from '../two/two.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
// export class OneComponent implements OnInit {
//   @ContentChild(TwoComponent) contentChild: TwoComponent;

//   constructor() {}

//   ngOnInit(): void {}

//   ngAfterContentInit() {
//     console.log('Parent Component ngAfterContentInit Called');
//     this.contentChild.myName = 'Momo';
//   }
//   ngAfterContentChecked() {
//     console.log('Parent Component ngAfterContentChecked Called');
//     this.contentChild.myName = 'Sheshadri';
//   }
// }
export class OneComponent implements OnInit {
  @ViewChild(TwoComponent) viewChild: TwoComponent;
  // @ViewChild(TwoComponent, { static: true }) viewChild: TwoComponent;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('Parent Component ngAfterViewInit Called');
    this.viewChild.myName = 'Momoo';
    this.cd.detectChanges();
  }
  ngAfterViewChecked() {
    console.log('Parent Component ngAfterViewChecked Called');
    this.viewChild.myName = 'Dheeraj Jaiswal';
    this.cd.detectChanges();
  }

  // ngAfterContentInit() {
  //   console.log('Parent Component ngAfterViewInit Called');
  //   this.viewChild.myName = 'Momoo';
  // }
}
