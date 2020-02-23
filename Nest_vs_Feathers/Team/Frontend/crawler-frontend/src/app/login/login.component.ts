import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  loginAction() {
    console.log(`logging in as ${this.username}`);
  }

  signinAction() {
    console.log(`signing in as ${this.username}`);
  }
}
