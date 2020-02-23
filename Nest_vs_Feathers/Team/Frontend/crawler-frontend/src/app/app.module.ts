import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShowModule} from './show/show.module';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';
import {ModelService} from './model/model.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ShowModule,
        LoginModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
