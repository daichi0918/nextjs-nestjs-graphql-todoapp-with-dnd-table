import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Priority, Status } from 'generated/prisma';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  dueDate: string;

  @Field()
  status: Status;

  // @Field(() => Int, {
  //   description: 'タスクの優先度',
  // })
  @Field()
  priority: Priority;

  @Field(() => String, {
    nullable: true,
    description: 'タスクの説明',
  })
  description: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
