import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TestAnswerModel } from 'src/models/test-answer.model';
import { TestModel } from 'src/models/test.model';
import { UserModel } from 'src/models/user.model';
import { AnswerTestDto } from './dto/answer.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(TestModel)
    private testModel: typeof TestModel,
    @InjectModel(TestAnswerModel)
    private answerModel: typeof TestAnswerModel,
  ) { }

  findOne() {
    return `This action returns a quest`;
  }

  answer(user: UserModel, startAttemptDto: AnswerTestDto) {
    return `This action returns a quest`;
  }
}
