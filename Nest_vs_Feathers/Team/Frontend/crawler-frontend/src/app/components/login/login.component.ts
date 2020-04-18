import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Feathers} from '../../services/feathers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  messages: string[] = [];

  constructor(
    private feathers: Feathers,
    private router: Router
  ) { }


    login(email: string, password: string) {
    if (!email || !password) {
      this.messages.push('Invalid credentials');
      return;
    }
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
        .then(() => {
          this.router.navigate(['/chat']);
        })
        .catch(err => {
          this.messages.unshift('Wrong credentials');
        });
  }

  signup(email: string, password: string) {
    // currently there's no logic for knowing which backend is online so just change those urls

    // this.model.http.post(`${environment.URL}/users`, {username, password})
    //   .subscribe(next => console.log(next));

    // *** FEATHERS
    this.feathers.service('users')
        .create({email, password})
        .then(() => this.messages.push('User Created'))
        .catch(err => this.messages.push('Could not create user!'));

    // if (this.username !== '' && this.password !== '') {
    //   console.log(`signing in as ${this.username}`);
    //   const date = new Date().toISOString();
    //   const user = this.model.user_data(this.model.userList.length,
    //     this.username,
    //     this.password,
    //     date);
    //   this.model.feathersChannel.signIn(user);
    // }
  }
}
