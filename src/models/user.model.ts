import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class UserModel extends Model<UserModel> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column
  group: string;

  @ApiProperty()
  @Column
  name: string;

  @ApiProperty()
  @Column
  isAdmin: boolean;
}
