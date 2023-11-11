const { errFunc } = require("./../../utils/helpers/error");

describe('errFunc', () => { 
    it('throws an error with message passed', () => {
        expect(() => errFunc('error! error!')).toThrow('error! error!')
    });

    it('throw any error', () => {
        expect(() => errFunc('error! please!')).toThrow(Error);
    })
 })