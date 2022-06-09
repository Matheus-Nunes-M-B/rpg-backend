import { ApiProperty } from '@nestjs/swagger';
import { SessionStatus } from '../entities/session.entity';

export class CreateSessionDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  status: SessionStatus;
  @ApiProperty({ required: false })
  background: string;
  @ApiProperty()
  masterId: number;
}
