import { TodoStatus } from "./todo-status.enum";

export interface Todo {
  name: string,
  status: TodoStatus
}
