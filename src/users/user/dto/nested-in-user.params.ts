import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class NestedInUserParams {
  @ApiProperty()
  @Transform(({ value }) => +value)
  userId: number;
}
