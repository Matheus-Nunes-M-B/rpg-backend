import {
  Controller, Get, Post, Body, Patch, Param, Delete,
} from '@nestjs/common';
import { SheetService } from './sheet.service';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';

@Controller('sheet')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Post()
  create(@Body() createSheetDto: CreateSheetDto) {
    return this.sheetService.create(createSheetDto);
  }

  @Get()
  findAll() {
    return this.sheetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sheetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSheetDto: UpdateSheetDto) {
    return this.sheetService.update(+id, updateSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sheetService.remove(+id);
  }
}
