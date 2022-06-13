import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  background: string;
  @ApiProperty()
  masterId: number;
  @ApiPropertyOptional()
  avatar?: string;
}
