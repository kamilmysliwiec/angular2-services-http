import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from "./todo";
import { TodosService } from "./todos.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public todos: Todo[];
  private todos$: Subscription;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosService.getTodos()
          .subscribe((todos) => this.todos = todos);
  }

  ngOnDestroy() {
    if(this.todos$) this.todos$.unsubscribe();
  }

  public addTodo(todo: Todo) {
    this.todosService.addTodo(todo)
      .then(() => this.todos.unshift(todo));
  }

  public removeTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
