# Javascript Guidelines

[[toc]]

## Style Guide

cf. Airbnb JavaScript Style Guide

[https://github.com/airbnb/javascript/blob/master/README.md](https://github.com/airbnb/javascript/blob/master/README.md)

## Readme Example

cf. [https://www.makeareadme.com/](https://www.makeareadme.com/)

~~~md
# `waves-masters`

> Low level components for transport and scheduling

## Documentation

[http://wavesjs.github.io/waves-masters/](http://wavesjs.github.io/waves-masters/)

## Installation

```sh
npm install waves-masters --save
```

## Usage

```js
// explicit default export
import masters from 'waves-masters';
// or named exports
import { Scheduler } from 'waves-masters';

// create the scheduler with an arbitrary clock
const getTime = () => new Date().getTime();
const scheduler = new Scheduler(getTime);
// create a time engine that will log the scheduled time every second
const engine = {
  period: 1,
  advanceTime(time) {
    console.log(time);
    return time + this.period;
  }
}

// add egine to scheduler
const startTime = Math.ceil(getTime());
scheduler.add(engine, startTime);
```

## Credits

The code has been initiated in the framework of the WAVE and CoSiMa research projects, funded by the French National Research Agency (ANR).

## License

BSD-3-Clause
~~~

## `import` and `export`

### Supported Environments

We should (try to) support at least the following environments: 

- Rollup
- Webpack
- browser native `import`
- Node.js (with and without babel)
- _when stable_: Node.js `import`

cf. [https://github.com/airbnb/javascript/blob/master/README.md#modules](https://github.com/airbnb/javascript/blob/master/README.md#modules)

:::warning Exception
Using this rule [https://github.com/airbnb/javascript/blob/master/README.md#modules--import-extensions](https://github.com/airbnb/javascript/blob/master/README.md#modules--import-extensions) breaks native `import` syntax in the browser.

Inside libraries `import` __MUST__ therefore declare the file extension
:::

@todo: clean integration testing environment

### Supported Syntaxes

Try to support both the following syntaxes:

```js
// explicit default export
import master from 'waves-masters';
// or named export
import { Scheduler } from 'waves-masters';
```

### Example

As such, to provide support for both import syntaxes and all the environment, the library should export both named export and an explicit default export.

In `waves-masters` this gives the following `index.js` file:

```js
import _TimeEngine from './core/TimeEngine.js';
import _PriorityQueue from './core/PriorityQueue.js';
import _SchedulingQueue from './core/SchedulingQueue.js';

import _PlayControl from './masters/PlayControl.js';
import _Transport from './masters/Transport.js';
import _Scheduler from './masters/Scheduler.js';
import _SimpleScheduler from './masters/SimpleScheduler.js';

// explicit default export
export default {
  TimeEngine: _TimeEngine,
  PriorityQueue: _PriorityQueue,
  SchedulingQueue: _SchedulingQueue,
  PlayControl: _PlayControl,
  Transport: _Transport,
  Scheduler: _Scheduler,
  SimpleScheduler: _SimpleScheduler,
};

// allow specific imports
export const TimeEngine = _TimeEngine;
export const PriorityQueue = _PriorityQueue;
export const SchedulingQueue = _SchedulingQueue;
export const PlayControl = _PlayControl;
export const Transport = _Transport;
export const Scheduler = _Scheduler;
export const SimpleScheduler = _SimpleScheduler;
```

## Transpiling and Shipping

### Browser Only Library

If the library is **client-side** only, ship only the ES-Import sources, as modern bundler (tested on _Rollup_ and _Webpack_) seems to support quite well the transpiling of ES-Import sources, and as native import is now working on modern browsers.

`package.json`:

```json
"main": "src/index.js"
```

### Node.js Only Library

If the library is dedicated to **Node.js only**, transpile with babel to pass ES-Import to CommonJS syntax (i.e. `require`, `module.exports`). 

Use:

`.babelrc`

```
{
  "sourceMap": "inline",
  "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
```

`package.json`

```json
  "main": "dist/index.js",
  "scripts": {
    "clean": "rm -Rf dist",
    "prepublishOnly": "npm run clean && npm run build",
    "build": "babel src --out-dir dist",
    "dev": "npm run clean && npm run build && chokidar src -c \"npm run build\""
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/plugin-transform-modules-commonjs": "^7.9.0",
    "chokidar": "^3.0.1",
    "chokidar-cli": "^2.1.0",
  }
```

### Node.js and Browser Library

If the library should work on both **Node.js and browsers**, ship ES-Import code to browsers and bundlers, and CommonJS code to Node.js. 

:::warning Note
For now `import` is still experimental in Node.js 13.x.x, review accordingly
:::

`.babelrc`

```
{
  "sourceMap": "inline",
  "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
```

`package.json`

```json
  "main": "dist/index.js",
  "browser": "src/index.js",
  "scripts": {
    "clean": "rm -Rf dist",
    "prepublishOnly": "npm run clean && npm run build",
    "build": "babel src --out-dir dist",
    "dev": "npm run clean && npm run build && chokidar src -c \"npm run build\""
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/plugin-transform-modules-commonjs": "^7.9.0",
    "chokidar": "^3.0.1",
    "chokidar-cli": "^2.1.0",
  }
```



















