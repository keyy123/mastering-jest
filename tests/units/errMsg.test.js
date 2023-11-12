//errMsg.test.js
const { errFunc } = require('../../utils/helpers/error.js');

describe('errFunc', () => {
    it('throw an error', () => {
        expect(() => errFunc('error! error!')).toThrow(Error);
    });

    it('throws an error with the message "Error!"', () => {
        try {
            errFunc('Error!');
        } catch (e) {
            expect(e.message).toEqual('Error!')
        }
    })
});