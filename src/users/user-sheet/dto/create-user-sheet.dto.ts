import { OmitType } from '@nestjs/swagger';
import { CreateSheetDto } from '~/sheets/sheet/dto/create-sheet.dto';

export class CreateUserSheetDto extends OmitType(CreateSheetDto, ['ownerId']) {}
