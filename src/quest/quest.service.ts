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
    return this.questModel.findOne();
  }

  startAttempt(user: UserModel, startAttemptDto: StartAttemptDto) {
    return `This action returns a quest`;
  }
  finishAttempt(finishAttemptDto: FinishAttemptDto) {
    return `This action returns a quest`;
  }
}
