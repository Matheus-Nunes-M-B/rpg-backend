import { PartialType } from '@nestjs/swagger';
import { CreateUserSheetDto } from './create-user-sheet.dto';

export class UpdateUserSheetDto extends PartialType(CreateUserSheetDto) {}
