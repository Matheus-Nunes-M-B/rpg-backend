import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { SessionStatus } from '~/sessions/session/entities/session.entity';

export class ChangeUserSessionStatusParams {
  @ApiProperty()
  @IsEnum(SessionStatus)
  status: SessionStatus;
}
