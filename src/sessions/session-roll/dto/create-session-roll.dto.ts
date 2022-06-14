import { OmitType } from '@nestjs/swagger';
import { CreateRollDto } from '~/rolls/roll/dto/create-roll.dto';

export class CreateSessionRollDto extends OmitType(CreateRollDto, [
  'sessionId',
]) {}
