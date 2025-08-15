import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './models/todo.model';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { nullable: 'items' })
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  @Mutation(() => Todo)
  createTodo(
    @Args('title') title: string,
    @Args('dueDate') dueDate: string,
    @Args('priority') priority: 'HIGH' | 'MEDIUM' | 'LOW',
    @Args('description', { nullable: true }) description: string,
  ): Todo {
    return this.todoService.createTodo(title, dueDate, priority, description);
  }
}
