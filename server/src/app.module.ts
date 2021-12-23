<<<<<<< HEAD
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
=======
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ItemsModule} from './items/items.module';

@Module({
    imports: [ItemsModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Kolyan2010@',
            database: 'auctions',
            logging: true,
            synchronize: true,
        })],
    controllers: [AppController],
    providers: [AppService],
>>>>>>> 4a87a0ea0fa24c8987fab25c386a39f2a483fc15
})
export class AppModule {
}
