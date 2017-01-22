import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Todo } from "./todo";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodosService } from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodosService ]
})
export class AppComponent {
  public todos: Todo[];
  @ViewChild('ref') ref: ElementRef;
  @ViewChildren(TodoItemComponent) todosRefsList: QueryList<TodoItemComponent>;

  constructor(private todosService: TodosService) {
    this.todos = todosService.getTodos();
  }

  public addTodo(todo: Todo) {
    console.log(this.todosRefsList);
    console.log(this.ref);
    this.todos.unshift(todo);
  }

  public removeTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
