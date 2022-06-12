import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SheetsModule } from './sheets/sheets.module';
import { SessionsModule } from './sessions/sessions.module';
import { DicesModule } from './dices/dices.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'rpg-backend',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsersModule,
    SheetsModule,
    SessionsModule,
    DicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
