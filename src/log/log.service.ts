import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LogModel } from 'src/models/log.model';
import { UserModel } from 'src/models/user.model';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(LogModel)
    private logModel: typeof LogModel,
  ) { }

  create(user: UserModel, createLogDto: CreateLogDto) {
    return 'This action adds a new log';
  }

  findAll() {
    return `This action returns all log`;
  }
}
