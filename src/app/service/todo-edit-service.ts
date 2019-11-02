import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoEditService {
  private subject = new Subject<Todo>();
  constructor() { }

  invokeEdit(item: Todo) {
    console.log('Editing TODO..', item.title);
    this.subject.next(item);
  }

  editTriggerEvent() {
    return this.subject.asObservable()
  }
}

