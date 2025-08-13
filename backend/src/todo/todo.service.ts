import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    const todo1 = new Todo();
    todo1.id = 1;
    todo1.title = 'Sample Todo 1';
    todo1.dueDate = '2023-10-01';
    todo1.status = 'NOT_STARTED';
    todo1.priority = 'HIGH';
    todo1.description = 'This is a sample todo item.';
    this.todos.push(todo1);

    return this.todos;
  }
}
