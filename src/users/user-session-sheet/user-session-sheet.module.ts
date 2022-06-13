import { Module } from '@nestjs/common';
import { SessionModule } from '~/sessions/session/session.module';
import { SheetModule } from '~/sheets/sheet/sheet.module';
import { UserModule } from '../user/user.module';
import { UserSessionSheetController } from './user-session-sheet.controller';

@Module({
  imports: [UserModule, SessionModule, SheetModule],
  controllers: [UserSessionSheetController],
  providers: [],
})
export class UserSessionSheetModule {}
