import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { TestModel } from './test.model';

@Table({ tableName: 'Quests' })
export class QuestModel extends Model<QuestModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column
  title: string;

  @ApiProperty()
  @Column(DataType.TEXT)
  description: string;

  @ApiProperty()
  @BelongsTo(() => TestModel, 'testId')
  test: TestModel;
}
