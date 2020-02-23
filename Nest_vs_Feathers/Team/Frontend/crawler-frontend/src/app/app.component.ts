import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crawler-frontend';
  public username = '';
  public password = '';

  loginAction() {
    console.log(`logging in as ${this.username}`);
  }

  signinAction() {
    console.log(`signing in as ${this.username}`);
  }
}
