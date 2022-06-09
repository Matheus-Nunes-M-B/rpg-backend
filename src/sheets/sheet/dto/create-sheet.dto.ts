import { ApiProperty } from '@nestjs/swagger';
import { Alignment, SheetRole } from '../entities/sheet.entity';

export class CreateSheetDto {
  id: number;

  // SCENARIO
  @ApiProperty()
  name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  alignment: Alignment;

  @ApiProperty()
  background: string;

  @ApiProperty()
  role: SheetRole;

  @ApiProperty()
  level: number;

  @ApiProperty()
  experience: number;

  @ApiProperty()
  health: number;

  @ApiProperty()
  strength: number;

  @ApiProperty()
  dexterity: number;

  @ApiProperty()
  intelligence: number;

  @ApiProperty()
  constitution: number;
}
