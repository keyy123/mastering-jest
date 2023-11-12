## Writing Custom Matchers for Jest
Goal(s): Learn how to write and implement custom matchers

* If the approved jest matcher libraries don't work for you (which is crazy) then you can always do-it-yourself, literally!

### When should you write a custom matcher?
- We should start with built-in matchers when writing tests 
- Custom matchers should only be made for difficult to test logic via existing tools. 
- Custom matchers work the same as other tests, if the test fulfills a predicate(condition), it will return a boolean (true or false) thats it

### How to write a custom matcher?
- A custom matcher is write like a function that takes in 2 arguments: 1. The data we are making an assumption about that is passed to `expect`, 2. Data passed to the matcher 
- The custom matcher needs to return a object with 2 fields: `pass` = boolean for if a test passed or failed, `message` = an anon fxn that return a string if test fails
- You can do this process in test file or aseparate file where `expect` can be used!

```js
customMatcher(received, expected){
    return {
        pass: true,
        message: () => '',
    };
};
```

- The main point i swe add conditional logic to the function that conditionally returns the `pass` and `message` fields based on the logic passed in 


Context: 

Imagine, we have a User factory that autocreates users with 2 fields: `name`(string) and `requireName`(boolean) which is vital b/c if the first condition will affect the second. 
If `requireName` is false then we check `setUserName` and if thats false, `''` will be the value for `name`. If opposite is true, We go to the check for name from the array 


```js
// user.js
class User {
  constructor() {
    const names = ['Jaidyn', 'Danna', 'Vance',
      'Esteban', 'Vanessa', 'Sloane','Yasmine',
      'Payton', 'Santiago', 'Chloe',
    ]

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }

    const requireName = Math.random() < 0.5 ? true : false;
    const setUserName = Math.random() < 0.5 ? true : false;

    const name = names[getRandomInt(names.length -1)]

    this.requireName = requireName;
    this.name = requireName || setUserName ?  name : '';
  }
};

export default User;
```

- We want to make a custom matcher to test if `requireName` is true for the user and the `name` has 0 letters to return false else true

```js
toEnforceNameRequirements(receivedUser) {
    if(receivedUser.requireName && name.length === 0){
        return {
            pass: false,
            message: () => 'name is empty and required',
        };
    };

    return {
        pass: true,
        message: () => '',
    };
}
```

- To use the matcher in our test, we need to extend `expect` with the new methods:
```js
expect.extend({
    toEnforceNameRequirement(receivedUser){
          if(receivedUser.requireName && name.length === 0){
        return {
            pass: false,
            message: () => 'name is empty and required',
        };
    };

    return {
        pass: true,
        message: () => '',
    };
    }
})
```

- Now, we can use it like other matchers:

```js
expect(new User()).toEnforceNameRequirements()
```

### Exercise:

Make a custom matcher to test a model, object or function of your choice and see if test what you are trying to test correctly