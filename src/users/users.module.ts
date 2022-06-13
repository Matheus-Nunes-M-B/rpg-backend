import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserSessionModule } from './user-session/user-session.module';
import { UserSheetModule } from './user-sheet/user-sheet.module';
import { UserSessionSheetModule } from './user-session-sheet/user-session-sheet.module';

@Module({
  imports: [UserModule, UserSessionModule, UserSheetModule, UserSessionSheetModule],
})
export class UsersModule {}
