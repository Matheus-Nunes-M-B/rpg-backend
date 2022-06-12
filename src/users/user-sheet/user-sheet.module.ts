import { Module } from '@nestjs/common';
import { UserSheetService } from './user-sheet.service';
import { UserSheetController } from './user-sheet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sheet } from '~/sheets/sheet/entities/sheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sheet])],
  controllers: [UserSheetController],
  providers: [UserSheetService],
})
export class UserSheetModule {}
