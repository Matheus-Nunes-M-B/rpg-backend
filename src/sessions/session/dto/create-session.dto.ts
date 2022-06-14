import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SessionStatus } from '../entities/session.entity';

export class CreateSessionDto {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  background: string;
  @ApiProperty()
  masterId: number;
  @ApiPropertyOptional()
  avatar?: string;
  @ApiPropertyOptional()
  status: SessionStatus;
}
