import { ApiProperty } from '@nestjs/swagger';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { TestQuestionModel } from './test-question.model';

@Table({ tableName: 'Tests' })
export class TestModel extends Model<TestModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column
  title: string;

  @ApiProperty()
  @HasMany(() => TestQuestionModel, 'testId')
  questions: TestQuestionModel[];
}
