import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import databaseProviders from './app.database.providers';
@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  exports: [...databaseProviders],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
