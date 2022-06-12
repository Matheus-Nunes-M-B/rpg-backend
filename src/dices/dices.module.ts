import { Module } from '@nestjs/common';
import { DiceModule } from './dice/dice.module';

@Module({
  imports: [DiceModule],
})
export class DicesModule {}
