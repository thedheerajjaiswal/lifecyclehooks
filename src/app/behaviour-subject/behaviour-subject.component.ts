import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css'],
})
export class BehaviourSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //   //Subject
  //   const mySubject = new Subject();
  //   mySubject.next(1);
  //   var Subscription1 = mySubject.subscribe((x) => {
  //     console.log('From Subscription 1 :' + x);
  //   });
  //   mySubject.next(2);
  //   var Subscription2 = mySubject.subscribe((y) => {
  //     console.log('From Subscription 2 :' + y);
  //   });
  //   mySubject.next(3);
  //   Subscription1.unsubscribe();
  //   mySubject.next('Dheeraj');
  //
  // //BehaviorSubject
  // const behaviorSubject = new BehaviorSubject(0);
  // let subscriber1 = behaviorSubject.subscribe((x) => {
  //   console.log('Subscriber1 : ' + x);
  // });
  // behaviorSubject.next(1);
  // let subscriptions2 = behaviorSubject.subscribe((x) => {
  //   console.log('Subscription2 :' + x);
  // });
  // behaviorSubject.next(2);
  // subscriber1.unsubscribe();
  // behaviorSubject.next(3);
  //
  // //ReplaySubject
  // const replaySubject = new ReplaySubject(1);
  // replaySubject.next(0);
  // replaySubject.next(1);
  // replaySubject.next(2);
  // let subscriber1 = replaySubject.subscribe((x) => {
  //   console.log('Subscriber1 : ' + x);
  // });
  // replaySubject.next(3);
  // replaySubject.next(4);
  // replaySubject.next(5);
  // let subscriptions2 = replaySubject.subscribe((x) => {
  //   console.log('Subscription2 :' + x);
  // });
  // replaySubject.next(6);
  // replaySubject.next(7);
  // replaySubject.next(8);
  //
  //
  // //asObservable
  // const mySubject = new BehaviorSubject('Password:12345');
  // let asSubject = mySubject.asObservable();
  // asSubject.subscribe((password) => {
  //   console.log('My Password : ' + password);
  // });
  // //asObservable data can`t be change
  // // asSubject.next('Password : 098765');
  //}
}
