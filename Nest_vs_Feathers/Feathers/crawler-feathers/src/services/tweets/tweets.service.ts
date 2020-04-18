// Initializes the `tweets` service on path `/tweets`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Tweets } from './tweets.class';
import createModel from '../../models/tweets.model';
import hooks from './tweets.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tweets': Tweets & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tweets', new Tweets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tweets');

  service.hooks(hooks);
}
