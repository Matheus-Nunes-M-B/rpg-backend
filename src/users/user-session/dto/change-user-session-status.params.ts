import { IsEnum } from 'class-validator';
import { SessionStatus } from '~/sessions/session/entities/session.entity';

export class ChangeUserSessionStatusParams {
  @IsEnum(SessionStatus)
  status: SessionStatus;
}
