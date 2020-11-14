import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class AdminOnlyGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<boolean>('adminOnly', context.getHandler());
    if (!role) return true;
    const request = context.switchToHttp().getRequest();
    const user: UserModel = request.user;
    return user.isAdmin == true;
  }
}
