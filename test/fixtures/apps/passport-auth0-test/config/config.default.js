'use strict';

exports.keys = 'foo';

exports.passportAuth0 = {
  domain: process.env.EGG_PASSPORT_AUTH0_DOMAIN,
  clientID: process.env.EGG_PASSPORT_AUTH0_CLIENT_ID,
  clientSecret: process.env.EGG_PASSPORT_AUTH0_CLIENT_SECRET,
};
