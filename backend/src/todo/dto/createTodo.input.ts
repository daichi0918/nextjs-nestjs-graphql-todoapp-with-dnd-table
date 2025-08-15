import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsDateString()
  dueDate: string;

  @Field(() => String)
  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  @Field({ nullable: true })
  description?: string;
}
