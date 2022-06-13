import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class NestedInUserSessionParams {
  @ApiProperty()
  @Transform((value) => Number(value))
  userId: number;

  @ApiProperty()
  @Transform((value) => Number(value))
  sessionId: number;
}
