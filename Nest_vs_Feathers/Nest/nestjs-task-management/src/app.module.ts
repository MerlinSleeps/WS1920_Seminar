import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [
    CrawlerModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    CrawlerModule,
  ],
})
export class AppModule {}
