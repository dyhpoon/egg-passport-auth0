'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportAuth0.name;
  });

  app.passport.mount('auth0');
};
