import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Session } from './entities/session.entity';

@Controller('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: Session,
    description: 'The record has been successfully created.',
  })
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sessionService.findOneBy({ id });
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(+id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sessionService.delete(+id);
  }
}
