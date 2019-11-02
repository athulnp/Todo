import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _todoList: Array<Todo>;

  getList() {
    if (this._todoList == undefined) {
      this._todoList = []
      for (let i = 0; i < window.localStorage.length; i++) {
        let id = window.localStorage.key(i)
        let item = JSON.parse(window.localStorage.getItem(id)) as Todo
        this._todoList.push(item)
      }
    }
    return this._todoList;
  }

  deleteItem(id: string) {
    window.localStorage.removeItem(id)
    this._todoList = undefined
  }

  addItem(item: Todo) {
    console.log('saving item : ', item);
    window.localStorage.setItem(item.id, JSON.stringify(item))
    this._todoList = undefined
  }

  updateItem(item: Todo) {
    console.log('saving item : ', item);
    window.localStorage.setItem(item.id, JSON.stringify(item))
    this._todoList = undefined
    // for (let i of this.todoList) {
    //   if (i.id === item.id) {
    //     i.title = item.title,
    //       i.title = item.description
    //   }
    // }
  }
  appendToEditor(item: Todo) {
    return item;
  }
}
