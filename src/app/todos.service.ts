import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { TodoStatus } from "./todo-status.enum";

@Injectable()
export class TodosService {

  getTodos(): Todo[] {
    return [
      { name: "Todo 1", status: TodoStatus.BUG },
      { name: "Todo 2", status: TodoStatus.TODO },
      { name: "Todo 3", status: TodoStatus.IN_REVIEW },
    ]
  }

}
