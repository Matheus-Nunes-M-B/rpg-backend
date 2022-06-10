import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  background: string;
  @ApiProperty()
  masterId: number;
}
