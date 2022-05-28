import { ApiProperty } from '@nestjs/swagger';

export class CreateSheetDto {
  @ApiProperty()
    name: string;
}
