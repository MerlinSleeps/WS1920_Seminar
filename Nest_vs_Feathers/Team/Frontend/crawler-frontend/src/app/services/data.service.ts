import { Injectable } from '@angular/core';
import { Feathers} from './feathers.service';
import {watch} from 'fs';

@Injectable()
export class DataService {

  constructor(private feathers: Feathers) { }

  messages$() {
    return (this.feathers
      .service('messages'))
      .watch()
      .find({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      });
  }

  users$() {
    return (this.feathers
      .service('users') as any)
      .watch()
      .find();
  }

  tweets$() {
    return (this.feathers
      .service('tweets'))
      .watch()
      .find();
  }

  sendMessage(message: string) {
    if (message === '') {
      return;
    }

    this.feathers
      .service('messages')
      .create({
        text: message
      });
  }

  fetchTweets() {
    this.feathers
      .service('tweets')
      .create({});
  }
}
