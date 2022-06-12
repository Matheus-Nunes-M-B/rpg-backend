import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '~/utils/base.service';
import { CreateRollDto } from './dto/create-roll.dto';
import { UpdateRollDto } from './dto/update-roll.dto';
import { Roll } from './entities/roll.entity';

@Injectable()
export class RollService extends BaseService<
  Roll,
  CreateRollDto,
  UpdateRollDto
> {
  constructor(@InjectRepository(Roll) repo: Repository<Roll>) {
    super(repo);
  }
}
