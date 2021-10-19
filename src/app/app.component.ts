import { Component, OnInit, ViewChild } from '@angular/core';
import { MsgService } from './msg.service';
import { ParentColorComponent } from './parent-color/parent-color.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lifecyclehook';

  @ViewChild(ParentColorComponent) parentColorComponent: ParentColorComponent;

  constructor(private _msgService: MsgService) {
    // console.log('I am a constructor Component');
  }

  ngOnInit() {
    // console.log('I am a OnInit Component');
    // console.log(this._msgService.getMessage());
  }

  // constructor() {
  //   console.log('I am a constructor Component');
  // }

  // ngOnInit() {
  //   console.log('I am a OnInit Component');
  //   let _msgService = new MsgService();
  //   console.log(_msgService.getMessage());
  // }

  changecolor(color: string) {
    this.parentColorComponent.changecolor(color);
  }
}
