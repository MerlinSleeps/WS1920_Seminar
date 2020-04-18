import assert from 'assert';
import app from '../../src/app';

describe('\'login\' service', () => {
  it('registered the service', () => {
    const service = app.service('login');

    assert.ok(service, 'Registered the service');
  });
});
