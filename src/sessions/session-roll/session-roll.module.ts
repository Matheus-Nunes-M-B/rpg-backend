import { Module } from '@nestjs/common';
import { RollModule } from '~/rolls/roll/roll.module';
import { SessionModule } from '../session/session.module';
import { SessionRollController } from './session-roll.controller';

@Module({
  imports: [SessionModule, RollModule],
  controllers: [SessionRollController],
})
export class SessionRollModule {}
