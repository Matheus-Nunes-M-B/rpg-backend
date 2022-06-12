import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiceService } from './dice.service';
import { CreateDiceDto } from './dto/create-dice.dto';
import { UpdateDiceDto } from './dto/update-dice.dto';

@Controller('dice')
export class DiceController {
  constructor(private readonly diceService: DiceService) {}

  @Post()
  create(@Body() createDieDto: CreateDiceDto) {
    return this.diceService.create(createDieDto);
  }

  @Get()
  findAll() {
    return this.diceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDieDto: UpdateDiceDto) {
    return this.diceService.update(+id, updateDieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diceService.remove(+id);
  }
}
