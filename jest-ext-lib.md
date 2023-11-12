## The Jest Extended Library

Goal(s): Learn about jest-extended, an open-source library that easily extends our testing toolkit

### How to extend the jest library?

- We can add more functions to jest by installing libraries like `jest-extended`.
- It has TS support, add more assertion matchers and functions for basic data types, complex data types,  Dates, Functions, Mocks, etc.
- It will increase readibility and clarity of test while removing burden of what assertion to use (???)

### How to extend `expect`?

- There are 1 of 2 ways to extend the expect function:

1. In test setup file, we can extend specific matchers or all of the new matchers.

```js
// extends all matchers
import * as matchers from 'jest-extended';
expect.extend(matchers)
```

```js
//extends only specific matchers matchers 
import {toBeAfter, toSatisfy, toReject} from 'jest-extended';
expect.extend({ toBeAfter, toSatisfy, toReject});
```

```js
* The easy way is to auto-extend all matchers `jest` field in `package.json`
```

```js
"jest": {
    "setupFilesAfterEnv": ["jest-extended/all"]
}
```

## How to use the extended API?
- It is better to read the matchers in the [jest-extended documentation](https://www.npmjs.com/package/jest-extended#api) 
- `.toSatisfy()` which works with custom values 
- `.toBeBetween()` is used to test date values 
- `.toContainAllKeys()` is used to test objects

#### Exercise - test out APIs in the jest-ext.test.js file 
- Try 3 APis not used in the file and make a simple tests to pass