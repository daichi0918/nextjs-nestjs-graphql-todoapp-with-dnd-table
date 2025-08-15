import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { CreateTodoInput } from './dto/createTodo.input';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(createTodoInput: CreateTodoInput): Todo {
    const { title, dueDate, priority, description } = createTodoInput;
    const newTodo = new Todo();
    newTodo.id = this.todos.length + 1; // Simple ID generation
    newTodo.title = title;
    newTodo.dueDate = dueDate;
    newTodo.status = 'NOT_STARTED';
    newTodo.priority = priority;
    newTodo.description = description || null;

    this.todos.push(newTodo);
    return newTodo;
  }
}
