import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  constructor() {}

  getMessage(): string {
    return 'Im a message Service';
  }
}
