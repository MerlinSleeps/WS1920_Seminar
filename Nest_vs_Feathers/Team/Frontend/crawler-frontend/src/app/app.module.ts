import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { Feathers } from './services/feathers.service';
import {LoginComponent} from './components/login/login.component';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [
    Feathers,
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
