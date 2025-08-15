import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(
    title: string,
    dueDate: string,
    priority: string,
    description?: string,
  ): Todo {
    const newTodo = new Todo();
    newTodo.id = this.todos.length + 1; // Simple ID generation
    newTodo.title = title;
    newTodo.dueDate = dueDate;
    newTodo.status = 'NOT_STARTED';
    newTodo.priority = priority as 'HIGH' | 'MEDIUM' | 'LOW';
    newTodo.description = description || null;
    // newTodo.createdAt = new Date();
    // newTodo.updatedAt = new Date();

    this.todos.push(newTodo);
    return newTodo;
  }
}
