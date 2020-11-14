import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';
import { Auth } from 'src/auth/auth.decorator';
import { ApiTags } from '@nestjs/swagger';
import { AnswerTestDto } from './dto/answer.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserModel } from 'src/models/user.model';

@Auth()
@ApiTags('test')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get()
  get() {
    return this.testService.findOne();
  }

  @Post()
  answer(@GetUser(ValidationPipe) user: UserModel, @Body() answerTestDto: AnswerTestDto) {
    return this.testService.answer(user, answerTestDto);
  }

}
