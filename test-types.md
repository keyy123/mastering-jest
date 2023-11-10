## Test Types in Jest
Goal(s): Learn about unit tests, integration tests, and snapshot tests in Jest

### What are the main types of tests doable in jest?
1. Unit Tests
2. Integration Tests
3. Snapshot Tests

### What are unit tests?
- Purpose: Ensure smallest piece of code alone work as expected
- Example: If a fxn is given 'A' will it return 'B' each and every time
- Why is it important: They validate what we think we know about the code we've made and can help us spot bugs that may be crashing the app

### What are integration tests?
- Tests that are one level above unit tests
- Purpose: Test how our units (small code snippets) work together
- Example(s): How user interactions with a react container changes many components with shared state and logic or validating data flow from one node layer to another
- Prequisites: These test rely on successful unit tests 
- Why is it important: They let us test our code in small but manageabe pieces without ruining app stability. Unit test checks the strength of our bricks, Integration test the strength of our wall. 

### What are snapshot tests?
- Front-end specific test that don't care about logic and focus on what is rendered to DOM (what is show on screen)
- Purpose: Focus on what elements are showed on screen before changes are made and compare to current code's elements
and critique and improve app's UX
- If the snapshot is different there are 1 of 2 choices, a.) We intentionally changed DOM and need to update snapshot or b.) We broke something and need to fix it before merging with main branch

### How to write testable code?
- Testable code = code that is easy to write tests for. 
- Focusing on writing testable code during development enforces best practices naturally such as `DRY`(when code is tested successfully, we can use it anywhere w/o re-testing it), and `single-responsibility principle` (functions do one tasks, and we can test if it does that task easily)
- Rule of thumb: If we've made code that can't be easily tested, we need to revise the code in question. There could be unnecessary coupling, complexity, or logic in the wrong place


Exercise:

Add these notes into a space-repetition system (SRS) to review the tests, purpose of each test type, and how to interpret each test, in addition to writing testable code. 

Next branch: 2-jest-&-ts