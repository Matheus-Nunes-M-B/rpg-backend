import { OmitType } from '@nestjs/swagger';
import { CreateSheetDto } from '~/sheets/sheet/dto/create-sheet.dto';

export class CreateUserSessionSheetDto extends OmitType(CreateSheetDto, [
  'ownerId',
  'sessionId',
]) {}
