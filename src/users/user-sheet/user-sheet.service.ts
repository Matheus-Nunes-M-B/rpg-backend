import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sheet } from '~/sheets/sheet/entities/sheet.entity';
import { BaseService } from '~/utils/base.service';
import { CreateUserSheetDto } from './dto/create-user-sheet.dto';
import { UpdateUserSheetDto } from './dto/update-user-sheet.dto';

@Injectable()
export class UserSheetService extends BaseService<
  Sheet,
  CreateUserSheetDto,
  UpdateUserSheetDto
> {
  constructor(@InjectRepository(Sheet) repo: Repository<Sheet>) {
    super(repo);
  }
}
