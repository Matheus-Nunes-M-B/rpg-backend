import { ApiProperty } from '@nestjs/swagger';

export class CreateRollDto {
  @ApiProperty()
  expression: string;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  sessionId: number;
}
