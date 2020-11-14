import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { QuestAttemptModel } from 'src/models/quest-attempt.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuestModel } from 'src/models/quest.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    SequelizeModule.forFeature([QuestModel, QuestAttemptModel]),
  ],
  controllers: [QuestController],
  providers: [QuestService]
})
export class QuestModule { }
