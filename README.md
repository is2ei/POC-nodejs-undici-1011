POC-nodejs-undici-1011
===
POC for https://github.com/nodejs/undici/issues/1011

```
$ node no-error.js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>About | Node.js</title>
...
```

```
$ npm test

> poc-nodejs-undici-1011@1.0.0 test
> tsc --noemit

type-error.ts:3:33 - error TS2345: Argument of type '{ path: string; }' is not assignable to parameter of type '{ dispatcher?: Dispatcher | undefined; } & Omit<RequestOptions, "origin" | "path" | "method"> & Partial<Pick<RequestOptions, "method">>'.
  Object literal may only specify known properties, and 'path' does not exist in type '{ dispatcher?: Dispatcher | undefined; } & Omit<RequestOptions, "origin" | "path" | "method"> & Partial<Pick<RequestOptions, "method">>'.

3 request('https://nodejs.org', { path: '/en/about/' })
                                  ~~~~~~~~~~~~~~~~~~


Found 1 error in type-error.ts:3
```
