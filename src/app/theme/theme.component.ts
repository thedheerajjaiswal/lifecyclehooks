import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  // @ViewChild('name') elName: ElementRef;
  // @ViewChild('age') elAge: ElementRef;

  // @ViewChildren('name') elName: QueryList<ElementRef>;
  // @ViewChildren('age') elAge: QueryList<ElementRef>;

  // @ContentChild('name') elName: ElementRef;
  // @ContentChild('age') elAge: ElementRef;

  @ContentChildren('name', { descendants: true }) elName: QueryList<ElementRef>;
  @ContentChildren('age', { descendants: true }) elAge: QueryList<ElementRef>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    // this.elName.nativeElement.style.backgroundColor = 'teal';
    // this.elName.nativeElement.style.color = 'white';
    // this.elName.nativeElement.value = 'Dheeraj';
    // this.elAge.nativeElement.style.backgroundColor = 'brown';
    // this.elAge.nativeElement.style.color = 'gold';
    // this.elAge.nativeElement.value = '26';
  }

  apply() {
    // this.elName.nativeElement.style.backgroundColor = 'teal';
    // this.elName.nativeElement.style.color = 'white';
    // this.elName.nativeElement.value = 'Dheeraj';
    // this.elAge.nativeElement.style.backgroundColor = 'brown';
    // this.elAge.nativeElement.style.color = 'gold';
    // this.elAge.nativeElement.value = '26';

    this.elName.forEach((el) => {
      el.nativeElement.style.backgroundColor = 'black';
      el.nativeElement.style.color = 'white';
      el.nativeElement.value = 'ContentChildren';
    });
    this.elAge.forEach((el) => {
      el.nativeElement.style.backgroundColor = 'red';
      el.nativeElement.style.color = 'white';
      el.nativeElement.value = '26';
    });
  }

  // ngAfterViewInit() {
  //   // this.elName.nativeElement.style.backgroundColor = 'black';
  //   // this.elName.nativeElement.style.color = 'white';
  //   // this.elName.nativeElement.value = 'Dheeraj jaiswal';
  //   // this.elAge.nativeElement.style.backgroundColor = 'orange';
  //   // this.elAge.nativeElement.style.color = 'red';
  //   // this.elAge.nativeElement.value = '26';

  //   this.elName.forEach((el) => {
  //     (el.nativeElement.style.backgroundColor = 'black'),
  //       (el.nativeElement.style.color = 'white'),
  //       (el.nativeElement.value = 'Rajan');
  //   });

  //   this.elAge.forEach((el) => {
  //     (el.nativeElement.style.backgroundColor = 'orange'),
  //       (el.nativeElement.style.color = 'red'),
  //       (el.nativeElement.value = '26');
  //   });
  // }
}
