import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserSessionModule } from './user-session/user-session.module';

@Module({
  imports: [UserModule, UserSessionModule],
})
export class UsersModule {}
