const {User} = require('../../utils/helpers/user');

expect.extend({
  toEnforceNameRequirements(receivedUser) {
    if (receivedUser.requireName && receivedUser.name.length === 0) {
      return {
        pass: false,
        message: () => 'name is empty and required',
      };
    };

    return {
      pass: true,
      message: () => '',
    };
  },
});

expect.extend({
    toConfirmActiveUser(receivedUser) {
        if (receivedUser.friends <= 0 && receivedUser.name.length === 0) {
            return {
                pass: false,
                message: () => 'name is empty and friends are empty'
            };
        };

        return {
            pass: true,
            message: () => ''
        };
    },
});

describe('User Constructor', () => {
    it('enforces name requirements', () => {
        expect(new User()).toEnforceNameRequirements();
    });

    it('starts friend count at 0', () => {
        expect(new User().friends).toEqual(0);
    });

    it('should increase friend count by 1', () => {
        let newUser = new User()
        expect(newUser.newFriends()).toBe(1);
    });

    it('confirm active user requirements are met', () => {
        let newUser = new User();
        expect(newUser.newFriends()).toConfirmActiveUser();
    })

})
expect.extend({
    customMatcher(x, y, z) {
      return {
        pass: true,
        message: () => 'test failed',
      };
    },
});
  
it('custom matcher', () => {
    let x = 1, y = 2, z = 3;
    expect(x).customMatcher(y, z);

    // Why wouldn't this test pass?

    // expect(x, y).customMatcher(z);

    // Expect can only take in 1 argument so the rest of the arguments from custom matcher method must be passed in the method directly
})

/* 
What are error handling matchers?

- .toThrow
- .rejects
- .toThrowErrorMatchingSnapshot


How to test if a test fails in jest?
- We use `.assertions` method to tell jest to check how many assertions are called 
- This lets us make an test that can pass even if the test would normally fail
```js 
//test async error via Promise.catch
it('tests error with promises', () => {
  expect.assertions(1);
  return user.getUserName(2).catch(e =>
    expect(e).toEqual({
      error: 'User with 2 not found.',
    }),
  );
});
```

```js
// async/await to test async errors
it('tests error with async/await', async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: 'User with 1 not found.',
    });
  }
});
```

recommend that you read the [async examples](https://jestjs.io/docs/tutorial-async#rejects) in jest documentation
*/