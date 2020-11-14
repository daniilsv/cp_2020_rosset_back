import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { QuestModule } from './quest/quest.module';
import { LogModule } from './log/log.module';
import configDefault from '../config/default';
import configProduction from '../config/production';
import { TestQuestionModel } from './models/test-question.model';
import { TestModel } from './models/test.model';

const _configs = { 'production': configProduction, 'default': configDefault };

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [_configs[process.env.NODE_ENV] || _configs['default']],
    }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          dialect: config.get('database.dialect'),
          host: config.get('database.host'),
          port: config.get('database.port'),
          username: config.get('database.username'),
          password: config.get('database.password'),
          database: config.get('database.database'),
          synchronize: config.get('database.synchronize'),
          autoLoadModels: true,
          logging: config.get('database.logging'),
          models: [
            TestModel,
            TestQuestionModel,
          ]
        };
      },
    }),
    AuthModule,
    TestModule,
    QuestModule,
    LogModule,
  ],
})
export class AppModule { }
