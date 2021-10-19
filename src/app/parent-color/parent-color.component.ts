import {
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css'],
})
export class ParentColorComponent implements OnInit {
  // @ViewChild(ChangecolorDirective) changecolorDirective: ChangecolorDirective;

  // @ViewChildren(ChangecolorDirective)
  // changecolorDirective: QueryList<ChangecolorDirective>;

  // @ContentChild(ChangecolorDirective)
  // changecolorDirective: ChangecolorDirective;

  @ContentChildren(ChangecolorDirective)
  changecolorDirective: QueryList<ChangecolorDirective>;
  constructor() {}

  ngOnInit(): void {}

  changecolor(color: string) {
    ////@Viewechild
    // this.changecolorDirective.change(color);
    //@ViewChildren
    // this.changecolorDirective.forEach((el) => el.change(color));

    // @ContentChild
    // this.changecolorDirective.change(color);

    // @ContentChildren
    this.changecolorDirective.forEach((el) => el.change(color));
  }
}
