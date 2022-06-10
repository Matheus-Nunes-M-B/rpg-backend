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
import { FindOneParams } from '~/utils/find-one.params';
import { NestedInUserParams } from '../user/dto/nested-in-user.params';
import { CreateUserSessionDto } from './dto/create-user-session.dto';
import { UpdateUserSessionDto } from './dto/update-user-session.dto';
import { UserSessionService } from './user-session.service';

@ApiTags('User/Session')
@Controller('user/:userId/session')
export class UserSessionController {
  constructor(private readonly service: UserSessionService) {}

  @Post()
  create(
    @Param() { userId }: NestedInUserParams,
    @Body() dto: CreateUserSessionDto,
  ) {
    return this.service.create({ masterId: userId, ...dto });
  }
  @Get('/mySession')
  findAllAsMaster(@Param('userId') userId: number) {
    return this.service.findAllBy({ masterId: userId });
  }
  @Get()
  findAllAsPlayer(@Param() { userId }: NestedInUserParams) {
    return this.service.findAll({
      relations: ['players'],
      where: {
        players: { id: userId },
      },
    });
  }

  @Get(':id/mySession')
  findOneAsMaster(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.service.findOneByOrFail({
      masterId: userId,
      id,
    });
  }

  @Get(':id')
  findOneAsPlayer(@Param('userId') userId: number, @Param() id: number) {
    return this.service.findOneByOrFail({
      id,
      players: { id: userId },
    });
  }

  @Patch(':id')
  async update(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
    @Body() dto: UpdateUserSessionDto,
  ) {
    const session = await this.service.findOneByOrFail({
      masterId: userId,
      id,
    });
    return this.service.update(session.id, dto);
  }

  @Delete(':id')
  async delete(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    const session = await this.service.findOneByOrFail({
      masterId: userId,
      id,
    });
    return this.service.delete(session.id);
  }

  @Post(':id/join')
  join(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.service.join(userId, id);
  }
  @Post(':id/leave')
  leave(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.service.leave(userId, id);
  }
  @Post(':id/start')
  start(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.service.start(userId, id);
  }
  @Post(':id/end')
  end(@Param() { userId }: NestedInUserParams, @Param() { id }: FindOneParams) {
    return this.service.end(userId, id);
  }
}
