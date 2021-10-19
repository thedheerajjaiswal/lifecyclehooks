import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // @Input() pData: any;
  // @Input() names: any;

  constructor() {
    // console.log('Child Component constructor Called');
  }
  // ngOnChanges(changes: any) {
  //   console.log('Child Component ngOnChanges Called');
  //   // console.log(changes);
  //   // console.log( 'current Value :' + changes.pData.currentValue );
  //   // console.log( 'Previous Value :' + changes.pData.previousValue );
  //   //   console.log('firstChange :' + changes.pData.firstChange);
  // }

  ngOnInit(): void {
    // console.log('Child Component ngOnInit Called');
  }
  // ngDoCheck() {
  //   console.log('Child Component ngDoCheck Called');
  // }
  // ngOnDestroy() {
  //   console.log('Child Component ngOnDestroy Called');
  // }
}
