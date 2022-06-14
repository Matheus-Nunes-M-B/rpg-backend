import { PartialType } from '@nestjs/swagger';
import { CreateSessionRollDto } from './create-session-roll.dto';

export class UpdateSessionRollDto extends PartialType(CreateSessionRollDto) {}
