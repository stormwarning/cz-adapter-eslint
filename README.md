# cz-adapter-eslint

[![npm version][npm-img]][npm-url]
[![npm downloads][dls-img]][npm-url]

A [commitizen][] adapter for the conventional-changelog [eslint preset][].

## Installation

### Global

```sh
npm install --global cz-adapter-eslint

# Set as the default adapter.
echo '{ "path": "cz-adapter-eslint" }' > ~/.czrc
```

### Local

```sh
npm install --save-dev cz-adapter-eslint
```

```json
"config": {
    "commitizen": {
        "path": "./node_modules/cz-adapter-eslint"
    }
}
```

## Usage

Once installed, stage your changes and run

```sh
git cz
```

instead of `git commit`.

[npm-url]: https://www.npmjs.com/package/cz-adapter-eslint

[npm-img]: https://img.shields.io/npm/v/cz-adapter-eslint.svg?style=flat-square

[dls-img]: https://img.shields.io/npm/dw/cz-adapter-eslint.svg?style=flat-square

[commitizen]: https://github.com/commitizen/cz-cli

[eslint preset]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint
