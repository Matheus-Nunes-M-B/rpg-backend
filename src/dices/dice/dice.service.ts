import { Injectable } from '@nestjs/common';
import { CreateDiceDto } from './dto/create-dice.dto';
import { UpdateDiceDto } from './dto/update-dice.dto';

@Injectable()
export class DiceService {
  create(createDieDto: CreateDiceDto) {
    return 'This action adds a new die';
  }

  findAll() {
    return `This action returns all dice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} die`;
  }

  update(id: number, updateDieDto: UpdateDiceDto) {
    return `This action updates a #${id} die`;
  }

  remove(id: number) {
    return `This action removes a #${id} die`;
  }
}
