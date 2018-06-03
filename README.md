# rollup-plugin-prepack-up

[![npm](https://img.shields.io/npm/v/rollup-plugin-prepack-up.svg)](https://www.npmjs.com/package/rollup-plugin-prepack-up) [![npm](https://img.shields.io/npm/dt/rollup-plugin-prepack-up.svg)](https://www.npmjs.com/package/rollup-plugin-prepack-up) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> [Rollup](https://github.com/rollup/rollup) plugin (updated [fork](https://github.com/olstenlarck/rollup-plugin-prepack)) for [Prepack](https://github.com/facebook/prepack).

## Install

[yarn](https://yarnpkg.com)

```sh
yarn add rollup-plugin-prepack-up
```

[npm](https://www.npmjs.com/)

```sh
npm install rollup-plugin-prepack-up --save
```

## Usage

```js
const prepack = require('rollup-plugin-prepack-up')

const input = 'src/index.js'
const output = {
  file: 'dist/optimized.js',
  format: 'iife',
  sourcemap: false
}

export default {
  input,
  output,
  plugins: [
    prepack(output.file, {/* options */})
  ]
}
```

## Contributions

Feel free to send some [pull request](https://github.com/joseluisq/rollup-plugin-prepack-up/pulls) or [issue](https://github.com/joseluisq/rollup-plugin-prepack-up/issues).

## License

MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
