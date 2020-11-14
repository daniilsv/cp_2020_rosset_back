import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { TestModel } from './test.model';

@Table({ tableName: 'TestQuestions' })
export class TestQuestionModel extends Model<TestQuestionModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @BelongsTo(() => TestModel, 'testId')
  test: TestModel;

  @ApiProperty()
  @Column
  title: string;

  @ApiProperty()
  @Column(DataType.TEXT)
  description: string;

  @ApiProperty()
  @Column(DataType.ARRAY(DataType.STRING))
  options: string[];

  @ApiProperty()
  @Column
  answer: number;
}
