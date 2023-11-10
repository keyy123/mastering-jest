const {sum, sumv2} = require('../../sum')

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

describe('sumv2 module', () => {
    test('select 5 then select 10 to equal 15', () => {
        expect(sumv2(5)(10)).toEqual(15);
    });
})