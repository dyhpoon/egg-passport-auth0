# egg-passport-auth0

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-auth0.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-auth0
[codecov-image]: https://img.shields.io/codecov/c/auth0/eggjs/egg-passport-auth0.svg?style=flat-square
[codecov-url]: https://codecov.io/auth0/eggjs/egg-passport-auth0?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-auth0.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-auth0
[snyk-image]: https://snyk.io/test/npm/egg-passport-auth0/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-auth0
[download-image]: https://img.shields.io/npm/dm/egg-passport-auth0.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-auth0

auth0 passport plugin for egg

## Install

```bash
$ npm i
```

## Usage

```js
// config/plugin.js
exports.passportAuth0 = {
  enable: true,
  package: 'egg-passport-auth0',
};
```

## Configuration

```js
// config/config.default.js
exports.passportAuth0 = {
  domain: 'your auth0 domain',
  clientID: 'your auth0 clientId',
  clientSecret: 'your auth0 clientSecret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## License

[MIT](LICENSE.txt)
