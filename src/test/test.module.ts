import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestModel } from 'src/models/test.model';
import { TestAnswerModel } from 'src/models/test-answer.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    SequelizeModule.forFeature([TestModel, TestAnswerModel]),
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule { }
