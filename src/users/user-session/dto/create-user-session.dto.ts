import { OmitType } from '@nestjs/swagger';
import { CreateSessionDto } from 'src/sessions/session/dto/create-session.dto';

export class CreateUserSessionDto extends OmitType(CreateSessionDto, [
  'masterId',
]) {}
