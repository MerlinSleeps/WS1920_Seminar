import {ModelService} from '../model/model.service';
import {environment} from '../../environments/environment';

export class FeathersChannel {
  public model: ModelService;

  public synchronize() {
    const message = {
      greetings: 'Incoming data from Frontend',
      eventList: [],
    };
    // send events to backend
    for (const user of this.model.userList) {
      const event = this.model.buildUserEvent(user);
      message.eventList.push(event);
    }
    this.model.http.post(`${environment.feathersURL}/feathers`, message)
      .subscribe((data) => this.handleResponse(data));

    // handle backend events
  }

  private handleResponse(data: any) {
    console.log(data);
  }

  access() {
    const message = {
      strategy: 'local',
      email: 'admin@example.com',
      password: 'secret'
    };
    const answer = this.model.http.post('http://localhost:3030/authentication', message);
    console.log(answer.toPromise());
  }
}
