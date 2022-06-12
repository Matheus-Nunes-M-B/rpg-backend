import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SheetService } from './sheet.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sheet')
@Controller('sheet')
export class SheetController {
  constructor(private readonly service: SheetService) {}

  @Post()
  create(@Body() createSheetDto: CreateSheetDto) {
    return this.service.create(createSheetDto);
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
  async update(
    @Param('id') id: number,
    @Body() updateSheetDto: UpdateSheetDto,
  ) {
    await this.service.findOneByOrFail({
      id,
    });
    return this.service.update(id, updateSheetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.service.findOneByOrFail({
      id,
    });
    return this.service.delete(id);
  }
}
