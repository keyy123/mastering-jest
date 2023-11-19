
const validateUser = require('./utils/helpers/validate-user');

describe('user validation', () => {   
    describe('WHEN it fails BECAUSE missing parameters like', () => {
        let user;
        beforeEach(() => {
             user = {
                first_name: 'Key',
                last_name: 'Par',
                age: 25,
                paid_member: true
            }
        });

        it('first name', () => {
            console.log(user)
            const u = { ...user };

            delete u.first_name;
            expect(() => { validateUser(u) }).toThrow();
        });

        it.skip('last_name', () => {
            const u = { ...user };

            delete u.last_name;
            expect(() => { validateUser(u) }).toThrow();
        });

        
    })
})