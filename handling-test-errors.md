## Testing Error Handling 
Goal(s): Learn how to test error handling and error messaging in JS apps 

- Beside tested the expected, we need to test how our code handles the unexpected (errors and exceptions). We can do this by testing the throw itself or by testing the error thrown. 

### How to test the throw?
- Jest has the methods built-in to test error throwing. 
- There are 2 matchers for this purpose: `.toThrow()` and `.toThrowError()`
- The way to use either method is specific: Throw a new error in the function body your testing 

*NOTE:* Both matchers work the same but toThrowError is an alias of toThrow so it's personal preferences which on you use

```js
// error.js
const errFunc = () => {
    throw new Error('Error!');
}

// need to make a callback that returns invoked function then throws the exception from it
expect(() => errFunc()).toThrow();
```

```js
// don't do this, the test won't be able to catch the exception but why?

expect(errorFunc()).toThrow();
```

#### What is the difference between both code snippets above?
- `expect(() => errFunc()).toThrow()` 
- In this case, arrow function (() => errFunc()) delays the call of the `errorFunc` fxn until `expect` statement is done running. This ensures expect is ready to catch the error and fulfill the matcher's criteria. 

- `expect(errFunc()).toThrow()`
- The errFunc will be called before the expect is finished running which means
the expect will not be able to catch the throw error and fails. 

### How to test the error?
- It vital to send helpful message when we encounter an error  
- We can use `toThrow` and `toThrowError` which can take in one argument
- The argument can be 1 of 4 things: 
* Regex pattern 
* A String 
* An error object
* An error class

```js
// errMsg.js
export const errFunc = (msg) => {
    throw new Error(msg);
}

//errMsg.test.js
import { errFunc } from './errorMessage.js';

describe('errFunc', () => {
  it('throws an error with the message passed', () => {
    expect(() => errFunc('error! error!')).toThrow('error! error!');
  })
})

```
* Testing specific error messages is vital at times but this makes test more fragile since we'd need to update test code
each time error message changed. 

* To catch any and all errors thrown, adding test coverage may be better 

#### In layman's terms:
-----------------------

The above snippet is weak since we are testing a specific error message which will most likely change. To strengthen this 
test, We just want the test to check if any error is thrown since the main point of the fxn is to throw an error when used. This also means the test code does not need to be changed regardless of the arguments we pass into it.

```js
// errMsg.js
export const errFunc = (msg) => {
    throw new Error(msg);
}

//errMsg.test.js
import { errFunc } from './errorMessage.js';

describe('errFunc', () => {
    it('throw an error', () => {
        expect(() => errFunc('error! error!')).toThrow(Error);
    });
});
```
- `.toThrow(Error)` means the test will check and pass as long as any `Error` is thrown and caught from the `errFunc`
- Thinking like this (test main feature while being flexible enough for re-use/customization) ensures that we save time and energy in testing while ensuring high-quality code!


### How to use `try/catch` for error handling in tests?
- We can wrap function in a `try...catch` block to catch errors and reveal error object to test
- The error MUST be thrown in the `try` block when the function is called to catch the error

```js
import { errFunc } from './errorMessage.js';

describe('errFunc', () => {
  it('throws an error with the message "Error!"', () => {
    try {
      errFunc();
    } catch (e) {
      expect(e.message).toEqual('Error!');
    };
  })
})
```

- We can also explicitly throw an error in a try block if function does not throw error if we want to test error in catch block. While useful in more specific tests, It better to use matchers to do so!

### How to test snapshots?
- To test errors against snapshots use the 2 matchers below:
* `.toThrowErrorMatchingSnapshot()` - takes an optional arg which is a string to hint why the error happened
* `.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)` - takes an atgument but jest passes it in for us

Next branch: 7-jest-extended-lib

W.I.P: Include tests in notes with videos as well to increase understanding of the content