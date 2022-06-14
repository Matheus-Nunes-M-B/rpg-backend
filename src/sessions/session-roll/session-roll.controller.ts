import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RollService } from '~/rolls/roll/roll.service';
import { FindOneParams } from '~/utils/find-one.params';
import { SessionService } from '../session/session.service';
import { CreateSessionRollDto } from './dto/create-session-roll.dto';
import { NestedInSessionParams } from './dto/nested-in-sessions.params';
import { UpdateSessionRollDto } from './dto/update-session-roll.dto';

@Controller('session-roll')
export class SessionRollController {
  constructor(
    private readonly sessionService: SessionService,
    private readonly rollService: RollService,
  ) {}

  @Post()
  create(
    @Param() { sessionId }: NestedInSessionParams,
    @Body() dto: CreateSessionRollDto,
  ) {
    return this.rollService.create({ sessionId, ...dto });
  }

  @Get()
  findAll(@Param() { sessionId }: NestedInSessionParams) {
    return this.rollService.findAll({
      where: {
        sessionId,
      },
    });
  }

  @Get(':id')
  findOne(
    @Param() { sessionId }: NestedInSessionParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.rollService.findOneByOrFail({
      sessionId,
      id,
    });
  }

  @Patch(':id')
  async update(
    @Param() { sessionId }: NestedInSessionParams,
    @Param() { id }: FindOneParams,
    @Body() dto: UpdateSessionRollDto,
  ) {
    await this.rollService.findOneByOrFail({
      sessionId,
      id,
    });
    return this.rollService.update(id, dto);
  }

  @Delete(':id')
  async remove(
    @Param() { sessionId }: NestedInSessionParams,
    @Param() { id }: FindOneParams,
  ) {
    await this.rollService.findOneByOrFail({
      sessionId,
      id,
    });
    return this.rollService.delete(id);
  }
}
