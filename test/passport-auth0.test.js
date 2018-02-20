'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');

describe('test/passport-auth0.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-auth0-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportAuth0')
      .expect(200);
  });

  it('should GET /passport/auth0 redirect to auth url', async () => {
    const { domain, clientID } = app.config.passportAuth0;
    const regex = new RegExp(`^https:\/\/${domain}\/authorize\\?response_type=code&redirect_uri=http(.*)&client_id=${clientID}`);

    const res = await request(app.callback())
      .get('/passport/auth0')
      .expect(302);

    assert(regex.test(res.header.location));
  });

  it('should GET /passport/auth0/callback redirect to auth url', async () => {
    const { domain, clientID } = app.config.passportAuth0;
    const regex = new RegExp(`^https:\/\/${domain}\/authorize\\?response_type=code&redirect_uri=http(.*)&client_id=${clientID}`);

    const res = await request(app.callback())
      .get('/passport/auth0/callback')
      .expect(302);

    assert(regex.test(res.header.location));
  });
});
