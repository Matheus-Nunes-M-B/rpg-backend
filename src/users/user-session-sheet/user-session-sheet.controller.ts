import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SessionService } from '~/sessions/session/session.service';
import { SheetService } from '~/sheets/sheet/sheet.service';
import { FindOneParams } from '~/utils/find-one.params';
import { UserService } from '../user/user.service';
import { CreateUserSessionSheetDto } from './dto/create-user-session-sheet.dto';
import { NestedInUserSessionParams } from './dto/nested-in-user-session.params';
import { UpdateUserSessionSheetDto } from './dto/update-user-session-sheet.dto';

@ApiTags('User/Session/Sheet')
@Controller('user/:userId/session/:sessionId/sheet')
export class UserSessionSheetController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly sheetService: SheetService,
  ) {}

  @Post()
  create(
    @Param() { userId, sessionId }: NestedInUserSessionParams,
    @Body() dto: CreateUserSessionSheetDto,
  ) {
    return this.sheetService.create({ ownerId: userId, sessionId, ...dto });
  }

  @Get()
  findAll(@Param() { userId, sessionId }: NestedInUserSessionParams) {
    return this.sheetService.findAll({
      where: {
        ownerId: userId,
        sessionId,
      },
    });
  }

  @Get(':id')
  findOne(
    @Param() { userId, sessionId }: NestedInUserSessionParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.sheetService.findOneByOrFail({
      ownerId: userId,
      sessionId,
      id,
    });
  }

  @Patch(':id')
  async update(
    @Param() { userId, sessionId }: NestedInUserSessionParams,
    @Param() { id }: FindOneParams,
    @Body() dto: UpdateUserSessionSheetDto,
  ) {
    await this.sheetService.findOneByOrFail({
      ownerId: userId,
      sessionId,
      id,
    });
    return this.sheetService.update(id, dto);
  }

  @Delete(':id')
  async remove(
    @Param() { userId, sessionId }: NestedInUserSessionParams,
    @Param() { id }: FindOneParams,
  ) {
    await this.sheetService.findOneByOrFail({
      ownerId: userId,
      sessionId,
      id,
    });
    return this.sheetService.delete(id);
  }
}
