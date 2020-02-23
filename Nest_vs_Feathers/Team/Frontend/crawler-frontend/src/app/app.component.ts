import { Component } from '@angular/core';
import {ModelService} from './model/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crawler-frontend';
  constructor(
    private model: ModelService
  ) {
  }
}
