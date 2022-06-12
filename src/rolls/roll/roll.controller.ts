import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RollService } from './roll.service';
import { CreateRollDto } from './dto/create-roll.dto';
import { UpdateRollDto } from './dto/update-roll.dto';

@Controller('roll')
export class RollController {
  constructor(private readonly rollService: RollService) {}

  @Post()
  create(@Body() createRollDto: CreateRollDto) {
    return this.rollService.create(createRollDto);
  }

  @Get()
  findAll() {
    return this.rollService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rollService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRollDto: UpdateRollDto) {
    return this.rollService.update(+id, updateRollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rollService.remove(+id);
  }
}
