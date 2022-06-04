import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SheetsModule } from './sheets/sheets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../sqlite3.sqlite3',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsersModule,
    SheetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}