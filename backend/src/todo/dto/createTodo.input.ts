import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';
import { Priority } from 'generated/prisma';

@InputType()
export class CreateTodoInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsDateString()
  dueDate: string;

  @Field(() => String)
  priority: Priority;

  @Field({ nullable: true })
  description?: string;
}
