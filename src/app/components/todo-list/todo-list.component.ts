import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // todoList: Array<Todo>;
  constructor(private storeApi: StoreService) { }

  ngOnInit() {
  }

}
