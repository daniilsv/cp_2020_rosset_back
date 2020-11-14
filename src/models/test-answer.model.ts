import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { TestModel } from './test.model';
import { UserModel } from './user.model';

@Table({ tableName: 'TestAnswers' })
export class TestAnswerModel extends Model<TestAnswerModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @BelongsTo(() => UserModel, 'userId')
  user: UserModel;

  @ApiProperty()
  @BelongsTo(() => TestModel, 'testId')
  test: TestModel;

  @ApiProperty()
  @Column(DataType.JSON)
  answers: any;

}
