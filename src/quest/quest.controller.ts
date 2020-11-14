import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserModel } from 'src/models/user.model';
import { FinishAttemptDto } from './dto/finish-attempt.dto';
import { StartAttemptDto } from './dto/start-attempt.dto';
import { QuestService } from './quest.service';

@Auth()
@ApiTags('quest')
@Controller('quest')
export class QuestController {
  constructor(private readonly questService: QuestService) { }

  @Get()
  get() {
    return this.questService.findOne();
  }

  @Post('startAttempt')
  startAttempt(@GetUser(ValidationPipe) user: UserModel, @Body() startAttemptDto: StartAttemptDto) {
    return this.questService.startAttempt(user, startAttemptDto);
  }

  @Post('finishAttempt')
  finishAttempt(@Body() finishAttemptDto: FinishAttemptDto) {
    return this.questService.finishAttempt(finishAttemptDto);
  }
}
