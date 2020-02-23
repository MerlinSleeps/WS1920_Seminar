import { Component, OnInit } from '@angular/core';
import {ModelService} from '../model/model.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(
    private model: ModelService
  ) { }

  ngOnInit(): void {
  }

  loginAction() {
    if (this.username !== '' && this.password !== '') {
      console.log(`logging in as ${this.username}`);
      const date = new Date().toISOString();
      const user = this.model.user_data(this.model.userList.length,
        this.username,
        this.password,
        date);
      console.log(`${user.name} is ready for the backend`);
    }
  }

  signinAction() {
    if (this.username !== '' && this.password !== '') {
      console.log(`signing in as ${this.username}`);
      const date = new Date().toISOString();
      const user = this.model.user_data(this.model.userList.length,
        this.username,
        this.password,
        date);
      this.model.feathersChannel.synchronize();
    }
  }
}
