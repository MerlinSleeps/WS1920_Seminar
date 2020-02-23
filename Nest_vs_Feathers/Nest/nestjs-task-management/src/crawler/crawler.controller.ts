import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
  constructor(private crawlerService: CrawlerService) {}

  @Get()
  getTweets() {
    return this.crawlerService.getTweets();
  }}
