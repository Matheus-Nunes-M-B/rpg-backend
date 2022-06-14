import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class NestedInSessionParams {
  @ApiProperty()
  @Transform(({ value }) => +value)
  sessionId: number;
}
