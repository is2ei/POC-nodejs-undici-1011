import { request } from 'undici';

request('https://example.com')
  .then(value => {
    console.log(value.statusCode);
  });
