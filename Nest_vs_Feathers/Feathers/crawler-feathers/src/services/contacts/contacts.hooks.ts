import {authenticate} from "@feathersjs/authentication";

import processContact from '../../hooks/process-contact';

import populateUser from '../../hooks/populate-user';

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processContact()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
