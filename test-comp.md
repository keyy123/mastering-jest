## Test Composition
Goal(s): Learn how to properly write a Jest test

### What does a test do?
- A test does 1 thing
- If X, then we should expect Y
```js
const addNumbers = (a, b) => {
    return a + b;
}
```

```js
expect(addNumbers(3,4)).toEqual(7);
```

### What is the structure of a jest test?
- There are 2 main blocks in a jest tests: `Expectation` (expect(addNumbers(3,4))) and the `Assertion` (.toEqual(7))
- The `expect`function can take in HTML element on the DOM, return values from a fxn, a response status, or any JS value
- Sadly, the code we want to test will be much more complex than simply calling a pure function and its return value
- Many best practices like separation of concerns, DRY, and single-responsibility principle which lets us need to test code once and be able to use it anywhere easily.
- The *assertion* is the evaluation of the value. In jest, we use *matchers* to evaluate a fxn.
- *Matchers* are a set of functions/methods that we can use on `expect` objects like `.toEqual(7)`

Next branch: 4-debug-tests

### Exercise:

1. Save info into SRS system 
2. Make a simple function and test it using Jest 