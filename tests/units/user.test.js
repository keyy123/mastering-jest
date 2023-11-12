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