import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/models/user.model';
import { AuthDto } from './dto/auth.dto';
import { JwtPayload } from './dto/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
    private jwtService: JwtService,
  ) { }

  async auth({ group, name }: AuthDto): Promise<string> {
    let user = await this.userModel.findOne({ where: { group, name } });
    if (!user) {
      user = await this.userModel.create({ group, name });
    }
    const payload: JwtPayload = { id: user.id, group: user.group, name: user.name, isAdmin: user.isAdmin || false };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
