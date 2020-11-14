import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { QuestAttemptModel } from './quest-attempt.model';
import { QuestModel } from './quest.model';
import { TestModel } from './test.model';
import { UserModel } from './user.model';

@Table({ tableName: 'Logs' })
export class LogModel extends Model<LogModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @BelongsTo(() => UserModel, 'userId')
  user: UserModel;

  @ApiProperty()
  @BelongsTo(() => QuestModel, 'questId')
  quest: QuestModel;

  @ApiProperty()
  @BelongsTo(() => QuestAttemptModel, 'attemptId')
  attempt: QuestAttemptModel;
  
  @ApiProperty()
  @BelongsTo(() => TestModel, 'testId')
  test: TestModel;

  @ApiProperty()
  @Column(DataType.JSON)
  answer: any;
}
