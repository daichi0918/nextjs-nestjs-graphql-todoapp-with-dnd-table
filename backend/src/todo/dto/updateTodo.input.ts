import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Priority, Status } from 'generated/prisma';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @Field({ nullable: true })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Field({ nullable: true })
  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;

  @Field({ nullable: true })
  description?: string;
}
