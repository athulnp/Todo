import { Component, OnInit, } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';
import { Observable, Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  todo: Todo
  subject: Subject<any>
  subscription: Subscription

  constructor(private storeApi: StoreService) {
    this.reset();
    this.updateItem();
  }

  ngOnInit() {
  }

  canSave(): boolean {
    return this.todo.title != "" && this.todo.description != "";
  }

  isEdit(): boolean {
    return this.todo.id != "" ? true : false;
  }

  saveItem() {
    if (this.todo.id != "") {
      this.storeApi.updateItem(this.todo);
    }
    else {
      this.todo.id = this.generateuuid()
      // save
      this.storeApi.addItem(this.todo);
      console.log(this.todo);
      this.reset();
    }
  }

  updateItem() {
    if (this.getMessages())
      this.subscription = this.getMessages().subscribe(item => {
        console.log(item.title);

        this.todo = item;
      });
  }

  getMessages(): Observable<any> {
    if (this.subject != undefined) {
      return this.subject.asObservable();
    }
  }
  reset() {
    this.todo = {
      title: "",
      description: ""
    }
  }

  generateuuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
