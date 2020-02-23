import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor() {
    this.date = new Date().toISOString();
  }
  public static readonly USER_DATA = 'user-data';
  public date: string;
  public userName: string;
  public userList: User[] = [];
  private dateMillis = 0;

  user_data(id: number, name: string, password: string, date: string) {
    const user = this.getOrCreateUser(id);
    if (user.date > date) {
      return user;
    } else {
      user.name = name;
      user.password = password;
      user.date = date;
      const event = {
        eventType: ModelService.USER_DATA,
        id: user.id,
        name: user.name,
        password: user.password,
        date: user.date
      };
      // TODO: send event to the backend
      return user;
    }
  }

  getOrCreateUser(id: number) {
    for (const user of this.userList) {
      if (user.id === id) {
        return user;
      }
    }
    const newUser = new User();
    newUser.id = id;
    this.userList.push(newUser);
    return newUser;
  }

  public getDate() {
    let time = new Date().getTime();
    if (time <= this.dateMillis) {
      time = this.dateMillis + 1;
    }
    this.dateMillis = time;
    const result = new Date(time).toISOString();
    return result;
  }
}
