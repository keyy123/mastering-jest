## Structuring clean tests

Goal(s): Learn how to organize and create a maintainable, efficient test environment

- We know focusing on unit testing can enforces clean code but making clean and organized test suites are just as vital.

### How to break down test files?

- Separating tests into files that match the code structure is the preferred method.
- Rule of thumb: make 1 test file per code file. If `user.js` exists, `user.test.js` better exist as well.
- This approach is good for the following reasons:

1. It keeps our tests maintainable
2. It's easy to know what our test will focus on
3. Easy to add more test as codebase grows
4. Find the right test suites (files) when code is breaking
5. The rule of thumb enforces single-responsibility principle by testing only one thing at a time. If the code we need is imported from many differnt files, we
   most likely are not keeping the code tested isolated enough from code that depnds on it (poor separation of concerns)

### How to organize a test suite?

- Inside test files, we have `test suites`.
- Test suite = a collection of tests that focuses on testing one unit of code
- A single test file can have one or more test suites.
   Example: If the code is for a client-side display element (a component), we may only need 1 test suite, If the testing is for a server controller or helper fxns, it may be cleaner to
   split into test suites for each controller method or helper fxn.

#### What are Jest globals that we can use after installing jest?

- `describe` = creates a new empty test suite and takes in 2 arguments: string telling what unit is being tested (component, function or class) and a anon function that holds the actual tests
- `test` and `it` = creates the tests (it is an alias for test so they are the same). It takes 3 arguments: string about what test is doing, anon function that holds expectations and assertiosn, and timeout in ms to wait for test to run before ending(optional)

### How to create the structure?

- `describe` can't be nested inside the `test` BUT they can within another `describe` function
- This may seem like a bad move since nesting describes in tests blocks could increase the level of organization for our tests
- We can't nest `test` blocks within other test blocks and use them to describe the tests being tested within child test blocks:

```js
describe('validateUser', () => {
    const user = {
        firstName: 'John',
        lastName: 'Steinbeck',
        email: 'john.steinbeck@educative.com',
        age: 66,
    };

    test('fails validation, () => {
        test('because missing firstname', () => {
            const u = { ...user };
            delete u.firstName;

            expect(() => validateUser(u)).toThrowError();
        })
}))

// This will cause jest to error out

```

- An alternative is to nest `test` blocks one level within `describe` blocks:

```js
describe('validateUser', () => {
    const user = {
        firstName: 'John',
        lastName: 'Steinbeck',
        email: 'john.steinbeck@educative.com',
        age: 66,
    };

    test('fails validation - missing firstName', () => {
        const u = { ...user };
        delete u.firstName;

        expect(() => validateUser(u)).toThrowError();
    })

    test('fails validation - missing lastName', () => {
        const u = { ...user };
        delete u.lastName;

        expect(() => validateUser(u)).toThrowError();
    });

    //OR

    describe('validateUser', () => {
        let user;
        beforeEach(() => {
             user = {
                firstName: 'John',
                lastName: 'Steinbeck',
                email: 'john.steinbeck@educative.com',
                age: 66,
            };
        })
        
    
        test('fails validation - missing firstName', () => {
            const u = { ...user };
            delete u.firstName;
    
            expect(() => validateUser(u)).toThrowError();
        })
    
        test('fails validation - missing lastName', () => {
            const u = { ...user };
            delete u.lastName;
    
            expect(() => validateUser(u)).toThrowError();
        });
  
```

### Exercise

Since I am too lazy to add a workfile this branch :). I want you to create a function to test from anywhere and add it to a new js file and export it. Make a new test file in `/test` directory. Make a test suite that has a `test` nested in a `test` block (test(test())) amd one where `describe` block has only `test` blocks nested 1 level within the describe block.