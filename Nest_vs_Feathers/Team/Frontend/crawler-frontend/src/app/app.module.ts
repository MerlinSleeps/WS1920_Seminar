import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShowModule} from './show/show.module';
import {ScrapperService} from './scrapper/scrapper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowModule
  ],
  providers: [ScrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
