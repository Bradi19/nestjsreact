import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { catsProviders } from './cat.providers';
// import { DatabaseModule } from './../app.database.providers';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService, ...catsProviders],
})
export class CatsModule {}
