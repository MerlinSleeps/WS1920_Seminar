import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShowModule} from './show/show.module';
import {ScrapperService} from './scrapper/scrapper.service';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ShowModule,
        LoginModule,
        FormsModule
    ],
  providers: [ScrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
