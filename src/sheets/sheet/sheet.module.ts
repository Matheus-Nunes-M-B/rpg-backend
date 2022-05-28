import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetService } from './sheet.service';
import { SheetController } from './sheet.controller';
import { Sheet } from './entities/sheet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sheet]),
  ],
  controllers: [SheetController],
  providers: [SheetService],
})
export class SheetModule { }
