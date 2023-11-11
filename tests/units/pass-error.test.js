const {errFunc}  = - require('./../../error.js');

const fn = errFunc


if (fn=== undefined) {
    throw new Error('import is incorrect or not registering')
}

describe('errFunc', () => {
    it('should pass', () => {
        expect(() => errFunc()).toThrow();
    })
})