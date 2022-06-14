import { Module } from '@nestjs/common';
import { RollService } from './roll.service';
import { RollController } from './roll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roll } from './entities/roll.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roll])],
  controllers: [RollController],
  providers: [RollService],
  exports: [RollService],
})
export class RollModule {}
