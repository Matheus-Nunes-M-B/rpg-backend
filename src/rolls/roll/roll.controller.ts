import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RollService } from './roll.service';
import { CreateRollDto } from './dto/create-roll.dto';
import { UpdateRollDto } from './dto/update-roll.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roll')
@Controller('roll')
export class RollController {
  constructor(private readonly service: RollService) {}

  @Post()
  create(@Body() dto: CreateRollDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOneByOrFail({
      id,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateRollDto) {
    await this.service.findOneByOrFail({
      id,
    });
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.service.findOneByOrFail({
      id,
    });
    return this.service.delete(id);
  }
}
