import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/createTodo.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Todo } from 'generated/prisma';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTodos(): Promise<Todo[]> {
    return await this.prismaService.todo.findMany();
  }

  async createTodo(createTodoInput: CreateTodoInput): Promise<Todo> {
    const { title, dueDate, priority, description } = createTodoInput;
    return await this.prismaService.todo.create({
      data: {
        title,
        dueDate,
        priority,
        description,
      },
    });
  }
}
