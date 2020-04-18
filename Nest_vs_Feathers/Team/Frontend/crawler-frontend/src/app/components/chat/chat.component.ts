import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';
import {map} from 'rxjs/operators';
import {Paginated} from '@feathersjs/feathers';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  messages: Observable<any[]>;
  users: Observable<any[]>;
  tweets: string[];

  constructor(
    private data: DataService,
    private auth: AuthService
  ) {
    this.messages = data.messages$().pipe(
      map((m: Paginated<any>) => m.data),
      map((m: Array<any>) => m.reverse())
    );

    this.users = data.users$().pipe(
      map((u: Paginated<any>) => u.data)
    );
  }

  sendMessage(message: string) {
    this.data.sendMessage(message);
  }

  logOut() {
    this.auth.logOut();
  }
}
