import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { SessionStatus } from '~/sessions/session/entities/session.entity';

export class ChangeUserSessionStatusParams {
  @ApiProperty({ enum: SessionStatus })
  @IsEnum(SessionStatus)
  status: SessionStatus;
}
