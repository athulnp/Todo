import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';
import { TodoEditService } from 'src/app/service/todo-edit-service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private storeApi: StoreService, private todoEditApi: TodoEditService) { }

  ngOnInit() {
  }
  delete(id: string) {
    this.storeApi.deleteItem(id);
  }

  edit(item: Todo) {
    console.log('edit ...', item.title);
    this.todoEditApi.invokeEdit(item)
  }
}
