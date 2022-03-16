const request = require('undici').request;

request('https://nodejs.org', { path: '/en/about/' })
  .then(value => value.body.text()
  .then(console.log));
