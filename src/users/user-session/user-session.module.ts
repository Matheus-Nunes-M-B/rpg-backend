import { Module } from '@nestjs/common';
import { UserSessionService } from './user-session.service';
import { UserSessionController } from './user-session.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from '~/sessions/session/entities/session.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Session])],
  controllers: [UserSessionController],
  providers: [UserSessionService],
})
export class UserSessionModule {}
