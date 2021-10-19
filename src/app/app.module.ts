import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './ngOnChanges/parent/parent.component';
import { ChildComponent } from './ngOnChanges/child/child.component';
import { OneComponent } from './ngAfterContentInit/one/one.component';
import { TwoComponent } from './ngAfterContentInit/two/two.component';
import { StudentComponent } from './ngAfterContentInit/student/student.component';
import { TeacherComponent } from './ngAfterContentInit/teacher/teacher.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter/counter.component';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ThemeComponent } from './theme/theme.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    StudentComponent,
    TeacherComponent,
    CounterParentComponent,
    CounterComponent,
    ParentColorComponent,
    ChangecolorDirective,
    ThemeComponent,
    BehaviourSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
