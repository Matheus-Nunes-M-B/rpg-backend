import { PartialType } from '@nestjs/swagger';
import { CreateUserSessionSheetDto } from './create-user-session-sheet.dto';

export class UpdateUserSessionSheetDto extends PartialType(
  CreateUserSessionSheetDto,
) {}
