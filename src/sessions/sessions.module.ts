import { Module } from '@nestjs/common';
import { SessionModule } from './session/session.module';
import { SessionRollModule } from './session-roll/session-roll.module';

@Module({
  imports: [SessionModule, SessionRollModule],
})
export class SessionsModule {}
