import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class CrawlerService {

  TwitterCrawler = require('twitter');
  credentials = new this.TwitterCrawler({
    consumer_key : 'TJIW2A8piFGIKj18F0gtt60kI',
    consumer_secret : 'R1QjjfZDHdPFl1l31CrQKOivOnI9oWAdTADRCwIW5jPNvLGcSw',
    access_token_key : '1231372842656247810-WY0U3UtvBXCkNpCunOiaIadnEHkDfO',
    access_token_secret : '1cxcVPj0b7O2gBUqu9xnaB7CSYxVL7fg3cmPXNgesmxWc',
    access_level: 'read',
    enabled: true,
  });

  getTweets() {
    this.credentials.get('statuses/user_timeline', {screen_name: 'realDonaldTrump'}, (error, tweets, response) => {
      if (!error) {
        for (let i = 0; i !== 10; i++) {
          console.log(tweets[i].text);
       }
      }
    });
  }

/*  getTweets() {
    const crawler = new this.TwitterCrawler(this.credentials);
    console.log('crawl tweets');
    crawler.getsTweets('@MatPatGT', {limit: 1})
      .then((tweets) => {
        console.log(JSON.stringify(tweets));
      })
      .catch();
  }*/
}
