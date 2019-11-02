import { Component, OnInit, OnDestroy, } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';
import { TodoEditService } from 'src/app/service/todo-edit-service';
import { Subscription } from 'rxjs';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  todo: Todo
  editTriggerSubscription: Subscription
  constructor(private storeApi: StoreService, private todoEditSrv: TodoEditService) {
    this.reset();
  }

  ngOnInit() {
    this.editTriggerSubscription = this.todoEditSrv.editTriggerEvent().subscribe(t => this.handleEdit(t))
  }

  ngOnDestroy(): void {
    if (this.editTriggerSubscription) {
      this.editTriggerSubscription.unsubscribe();
    }
  }

  canSave(): boolean {
    return this.todo.title != "" && this.todo.description != "";
  }

  handleEdit(item: Todo) {
    console.log('updating editor with ', item);
    this.todo = item;
  }

  isEdit(): boolean {
    return this.todo.id ? true : false;
  }

  saveItem() {
    if (this.isEdit()) {
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
