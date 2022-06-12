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
  findOne(@Param('id') id: number) {
    return this.sheetService.findOneBy({
      id,
    });
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSheetDto: UpdateSheetDto) {
    return this.sheetService.update(id, updateSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sheetService.delete(id);
  }
}
