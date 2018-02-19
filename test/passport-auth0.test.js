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
    const { domain, clientID, callbackURL } = app.config.passportAuth0;
    const regex = new RegExp(`^https://${domain}/authorize?response_type=code&redirect_uri=${encodeURI(callbackURL)}&client_id=${clientID}`);
    // https://onion-sample.auth0.com/authorize?response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A53485%2Fpassport%2Fauth0%2Fcallback&client_id=6yI6fwldg459UqkI6DPkvuRcRBMEfmnW

    const res = await request(app.callback())
      .get('/passport/auth0')
      .expect(302);

    console.log(callbackURL);
    assert(callbackURL === 2);
    assert(regex.test(res.header.location));
  });

  it('should GET /passport/auth0/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/auth0/callback')
      .expect('Location', /^https:\/\/github.com\/login\/oauth\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });
});
