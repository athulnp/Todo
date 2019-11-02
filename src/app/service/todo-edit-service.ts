import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoEditService {
  private subject = new Subject<any>();
  constructor() { }

  invokeEdit(item: Todo) {
    console.log('Invoke ..', item.title);
    this.subject.next({ it: item });
  }
}

