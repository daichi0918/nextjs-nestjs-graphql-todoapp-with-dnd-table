import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Status } from 'generated/prisma';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  dueDate: string;

  @Field()
  // status: Status;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

  // @Field(() => Int, {
  //   description: 'タスクの優先度',
  // })
  @Field()
  priority: 'HIGH' | 'MEDIUM' | 'LOW';

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
