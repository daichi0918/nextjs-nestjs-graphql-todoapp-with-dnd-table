import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo as TodoModel } from './models/todo.model';
import { CreateTodoInput } from './dto/createTodo.input';
import { Todo } from 'generated/prisma';
import { UpdateTodoInput } from './dto/updateTodo.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoModel], { nullable: 'items' })
  @UseGuards(JwtAuthGuard)
  async getTodos(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Todo[]> {
    return await this.todoService.getTodos(userId);
  }

  @Mutation(() => TodoModel)
  @UseGuards(JwtAuthGuard)
  async createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.createTodo(createTodoInput);
  }

  @Mutation(() => TodoModel)
  @UseGuards(JwtAuthGuard)
  async updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.updateTodo(updateTodoInput);
  }

  @Mutation(() => TodoModel)
  @UseGuards(JwtAuthGuard)
  async deleteTodo(@Args('id', { type: () => Int }) id: number): Promise<Todo> {
    return await this.todoService.deleteTodo(id);
  }
}
