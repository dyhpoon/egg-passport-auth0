'use strict';

const debug = require('debug')('egg-passport-auth0');
const assert = require('assert');
const Strategy = require('passport-auth0');

module.exports = app => {
  const config = app.config.passportAuth0;

  config.passReqToCallback = true;
  assert(
    config.domain,
    '[egg-passport-auth0] config.passportAuth0.domain required'
  );
  assert(
    config.clientID,
    '[egg-passport-auth0] config.passportAuth0.clientID required'
  );
  assert(
    config.clientSecret,
    '[egg-passport-auth0] config.passportAuth0.clientSecret required'
  );
  assert(
    config.callbackURL,
    '[egg-passport-auth0] config.passportAuth0.callbackURL required'
  );

  // must require `req` params
  app.passport.use(
    'auth0',
    new Strategy(
      config,
      (req, accessToken, refreshToken, extraParams, profile, done) => {
        const user = {
          provider: 'auth0',
          id: profile.id,
          email: profile._json.email,
          name: profile.nickname,
          displayName: profile.displayName,
          photo: profile.picture && profile._json.picture,
          accessToken,
          refreshToken,
          extraParams,
          profile,
        };

        debug('%s %s get user: %j', req.method, req.url, user);

        // let passport do verify and call verify hook
        app.passport.doVerify(req, user, done);
      }
    )
  );
};
