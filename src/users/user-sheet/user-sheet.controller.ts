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
import { CreateUserSheetDto } from './dto/create-user-sheet.dto';
import { UpdateUserSheetDto } from './dto/update-user-sheet.dto';
import { UserSheetService } from './user-sheet.service';

@ApiTags('User/Sheet')
@Controller('user/:userId/sheet')
export class UserSheetController {
  constructor(private readonly service: UserSheetService) {}

  @Post()
  create(
    @Param() { userId }: NestedInUserParams,
    @Body() dto: CreateUserSheetDto,
  ) {
    return this.service.create({ ownerId: userId, ...dto });
  }
  @Get()
  findAll(@Param() { userId }: NestedInUserParams) {
    return this.service.findAll({
      relations: ['owner'],
      where: {
        ownerId: userId,
      },
    });
  }
  @Get(':id')
  findOne(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    return this.service.findOneOrFail({
      relations: ['owner'],
      where: {
        id: id,
        ownerId: userId,
      },
    });
  }

  @Patch(':id')
  async update(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
    @Body() dto: UpdateUserSheetDto,
  ) {
    const sheet = await this.service.findOneByOrFail({
      ownerId: userId,
      id,
    });
    return this.service.update(sheet.id, dto);
  }

  @Delete(':id')
  async delete(
    @Param() { userId }: NestedInUserParams,
    @Param() { id }: FindOneParams,
  ) {
    const sheet = await this.service.findOneByOrFail({
      ownerId: userId,
      id,
    });
    return this.service.delete(sheet.id);
  }
}
