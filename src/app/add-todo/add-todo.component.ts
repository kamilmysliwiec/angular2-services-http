import { Component, EventEmitter, Output, ViewChild, ContentChild } from '@angular/core';
import { Todo } from "../todo";
import { TodoStatus } from "../todo-status.enum";

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<Todo>();
  todo: Todo;
  @ViewChild('ref') public ref: any;

  constructor() {
    this.setInitial();
  }

  public add(): void {
    console.log(this.ref);
    const { name, status } = this.todo;

    if(name.length > 0) {
      this.todo.status = +status;
      this.addTodo.emit(this.todo);
      this.setInitial();
    }
  }

  private setInitial(): void {
    this.todo = {
      name: "",
      status: TodoStatus.TODO
    }
  }
}
