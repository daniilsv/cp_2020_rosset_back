import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { QuestModel } from './quest.model';
import { UserModel } from './user.model';

@Table({ tableName: 'QuestAttempts' })
export class QuestAttemptModel extends Model<QuestAttemptModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @BelongsTo(() => UserModel, 'userId')
  user: UserModel;

  @ApiProperty()
  @BelongsTo(() => QuestModel, 'questId')
  quest: QuestModel;

  @ApiProperty()
  @Column(DataType.JSON)
  answer: any;
}
