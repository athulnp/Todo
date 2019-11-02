import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  todoList: Array<Todo>;
  constructor() {
    this.todoList = [
      {
        id: "uuid1",
        description: "sample description",
        title: "Sample title"
      },
      {
        id: "ffffffffff",
        description: "sample description 4",
        title: "sdfsd sdfsdf"
      }
    ]
  }

  getList() {
    return this.todoList;
  }

  deleteItem(id: string) {
    // this.todoList.
  }

  addItem(item: Todo) {
    console.log('saving item : ', item);
    this.todoList.push(item)
    console.log('list : ', this.todoList);
  }

  updateItem(item: Todo) {
    for (let i of this.todoList) {
      if (i.id === item.id) {
        i.title = item.title,
          i.title = item.description
      }
    }
  }
}
