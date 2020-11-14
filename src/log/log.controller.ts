import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminOnly, Auth } from 'src/auth/auth.decorator';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserModel } from 'src/models/user.model';
import { CreateLogDto } from './dto/create-log.dto';
import { LogService } from './log.service';

@Auth()
@ApiTags('log')
@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) { }

  @Post()
  add(@GetUser(ValidationPipe) user: UserModel, @Body() createLogDto: CreateLogDto) {
    return this.logService.create(user, createLogDto);
  }

  @Get()
  @AdminOnly()
  findAll() {
    return this.logService.findAll();
  }
}
