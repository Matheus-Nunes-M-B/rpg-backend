import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class FindOneParams {
  @ApiProperty()
  @Transform(({ value }) => +value)
  id: number;
}
