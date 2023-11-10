## Jest and TypeScript
Goal(s): Learn how to use Jest for testing TS apps

### How to configure jest to test TypeScript?
- Jest has 2 options to set up for TS testing: `babel` and `ts-jest`

### How to set `ts-jest` up within jest?
- `ts-jest` is a TS processor that can id test files with extension `.test.ts` instead of `.test.js`

1. Inform Jest to read `.ts` and `.tsx` for ts modules by updating `moduleFileExtensions` in config file:
```
{
    moduleFileExtensions: ['js', 'ts']
}
```

2. Point any configuration using regex or file paths to also consider TS files:

```js
// before
{
    collectCoverageFrom: ['src/*.(js | jsx)']
}

// after 
{
      collectCoverageFrom: ['src/*.(js | jsx | ts | tsx)']
}
```

3. We need to add a key-value pair to `transform` field where key is all ts file extensions to watch for and the value is the node module that will process those files (`ts-jest`)

```js
{
    transform: {
        '\\.(ts | tsx)$': 'ts-test'
    }
}
```

### How to set `babel-test` up within jest?
- If your project uses a babel config then we can use it to support typescript
- Babel config for jest needs 3 packages: `babel-jest`, `@babel/core`, `@babel/preset-env` 
```node
npm i --save babel-jest @babel/core @babel/preset-env

or

yarn add --dev babel-jest @babel/core @babel/preset-env
```
- After installing the packages, we need to set up babel via `package.json` or `babel.config.js` file:
```json
// package.json
{
   {
    "devDependencies": {
        "@babel/plugin-transform-runtime": "7.17.10",
        "@babel/preset-env": "7.17.10",
        "@babel/runtime": "7.17.9",
        "babel-jest": "28.0.3",
        "jest": "28.0.3"
    },
    "scripts": {
        "test": "jest"
    },
    "babel": {
        "presets": [
        "@babel/preset-env",
        {
            "targets": {
                "node": "current"
            }
        }
        ]
    }
    } 
}
```

or

```js
module.exports = {
    presets: [
        '@babel/preset-env',
        {targets: {node: 'current'}}
  ],
}
```

- To activate TS support, we need to install one more package `@babel/preset-typescript` and add it to our config file:

`npm i --save @babel/preset-typescript` or `yarn add --dev @babel/preset-typescript`

- Add this package into babel `presets` array:

```json
{
  "devDependencies": {
    "@babel/plugin-transform-runtime": "7.17.10",
    "@babel/preset-env": "7.17.10",
    "@babel/runtime": "7.17.9",
    "babel-jest": "28.0.3",
    "jest": "28.0.3"
  },
  "scripts": {
    "test": "jest"
  },
  "babel": {
    "presets": [
      "@babel/preset-env",
      {"targets": {"node": "current"}},
      "@babel/preset-typescript"  // latest update
    ]
  }
}
```

or

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    {targets: {node: 'current'}},
    '@babel/preset-typescript',
  ],
};
```


### How to use `@types/jest`? 
- @types/jest gives us ability to test types in jest
- npm i @types/jest
- We would be about to make `matchers` and `mocks` for types plus we would be able to make type assertions using TS types and `typeof` operator. 

### Exercise:

Add notes into SRS system and review until you can comfortably recall these processes before adding more into your SRS system. 

Next branch: 3-test-composition