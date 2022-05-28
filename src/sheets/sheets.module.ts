import { Module } from '@nestjs/common';
import { SheetModule } from './sheet/sheet.module';

@Module({
  imports: [SheetModule],
})
export class SheetsModule {}
