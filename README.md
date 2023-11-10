# mastering-jest

Learning how to use Jest testing framework to test applications in-depth

## Why are accurate tests vital?

- Great (Hi-Quality) tests let us iterate (complete a round) on development quickly with confidence. 
- We can ensure our code follows requirements and be able to change it without unintentionally breaking existing codebase
- Context: We want form to submit when user clicks `<button>submit</button>`. If we change CSS, inputs, styling, or element nesting, we still want the form to submit if user clicks the button. 
- In writing a test for the button's functionality, we safely make these changes and know that the form will still work as intended.  

###  What if our tests are not accurate or useful?
- If the test is poorly written, It gives a false sense of security and ship broken code without us knowing

### What is Jest?
- A test runner = a program that runs our tests 
- Jest is a JS test runner that works on JS frameworks and servers

### What is the environment that Jest needs?
- WE need additional support to access our code that we want to test properly
- Testing a server look different than testing a browser client
- Other framework specific testing libraries handle these issues for Jest such as `Supertest`(node), `React Testing Library`(react), `Angular Testing Library`(angular)
- Remember, Jest is framework-agnostic 

### Skills to learn:

- Utilize Jest in different JS frameworks such as Next, React, Vue, Angular, Nest, Express
- Learn setup, mocking, data stubbing, documentation, organization and assertions with Jest
- Learn when to use specific framework-specific library to test specific framework used in project
- Learn to query DOM to make assertions on what the user can see adn test data in HTTP responses from API or server
