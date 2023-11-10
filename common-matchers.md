## Common Matchers in Jest

Goal(s): Learn about matchers in Jest

### What are matchers?

- *Matcher* = the method that handles the assertion part of a test by passing or failing test based on what we assert to be true
- the `expect` function has many `matchers` that can be used via dot notation
- `expect(2+2).toEqual(4)`

### What are the types of matchers?

- Truthiness
- Equality
- Numerical Comparison
- Exceptions
- Function Calls

### What are common matchers?

- `.toBe()` = checks the equality of 2 basic (primative) values but not w/ floating point numbers
- Booleans = primitives as well

#### How to compare 2 objects?

- We can use `Object.is()` or use reference id to compare key-value pairs from each object
   `expect(Object.is(obj1, obj2)).toBe(true)`


- `.toMatch()` = uses regex to test strings which is useful to test dynamic text to see if it rendered well
- `.toBeTruthy()`and `.toBeFalsy()` = test if something is true or false. They are direct abstractions of `.toBe`
- `.toHaveBeenCalled()` = tells us if a mock function has been called or not. It's useful to test if a component does a task after a certain event
- `.toBeNull()` = asserts that the expected values is === null
- `.toContain()` = checks if an item is in an array. They must be in `expect` and the item passed to `.toContain()`
- `.not()` = tests the opposite of any matcher used after the expect function. It's like using ! in JS to negate things

### Exercise:

Read the type information in jest and make 3 - 5 new test in the file based on what interests you 

file: node_modules/@types/node/test.d.ts
docs: jest docs