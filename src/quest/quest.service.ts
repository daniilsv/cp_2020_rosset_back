import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { QuestAttemptModel } from 'src/models/quest-attempt.model';
import { QuestModel } from 'src/models/quest.model';
import { UserModel } from 'src/models/user.model';
import { FinishAttemptDto } from './dto/finish-attempt.dto';
import { StartAttemptDto } from './dto/start-attempt.dto';
@Injectable()
export class QuestService {
  constructor(
    @InjectModel(QuestModel)
    private questModel: typeof QuestModel,
    @InjectModel(QuestAttemptModel)
    private attemptModel: typeof QuestAttemptModel,
  ) { }

  findOne() {
    return `This action returns a quest`;
  }

  startAttempt(user: UserModel, startAttemptDto: StartAttemptDto) {
    throw new Error('Method not implemented.');
  }
  finishAttempt(finishAttemptDto: FinishAttemptDto) {
    throw new Error('Method not implemented.');
  }
}
