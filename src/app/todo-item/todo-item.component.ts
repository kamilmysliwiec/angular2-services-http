import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../todo";
import { TodoStatus } from "../todo-status.enum";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Output() removeTodo = new EventEmitter<Todo>();
  @Input() item: Todo;

  get statusName(): string {
    const { status } = this.item;

    switch(status) {
      case TodoStatus.DONE: return "DONE";
      case TodoStatus.BUG: return "BUG";
      case TodoStatus.IN_PROGRESS: return "IN PROGRESS";
      case TodoStatus.IN_REVIEW: return "IN REVIEW";
      default: return "TODO";
    }
  }

  get classNames() {
    const statusName = this.statusName.split(" ").pop().toLowerCase();

    return {
      'status': true,
      [`status-${statusName}`]: true
    }
  }

  public remove(): void {
    this.removeTodo.emit(this.item);
  }
}
