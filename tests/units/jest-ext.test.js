describe('object', () => {
    const o = { firstName: 'Bruce', lastName: 'Springsteen', email: 'bruce@gmail.com' };

    it('is object', () => {
        expect(o).toBeObject();
    })

    it('contains all keys', () => {
        expect(o).toContainAllKeys(['firstName', 'lastName', 'email']);
    })
    
    it('is not empty', () => {
        expect(o).not.toBeEmptyObject();
    });
})

describe('array', () => {
    const a = ['Bruce', 'Bob', 'Cass'];

    it('is array', () => {
        expect(a).toBeArray();
    })

    it('is array with 3 items', () => {
        expect(a).toBeArrayOfSize(3);
    })

    it('does not include items', () => {
        expect(a).not.toIncludeAnyMembers(['Janis']);
    })

    it('does not include a member', () => {
        expect('Willis').not.toBeOneOf(a);
    })

    it('is non-existant member nil', () => {
        expect(a[4]).toBeNil();
    })

    it('does match partial substring', () => {
        expect(a).toIncludeAllPartialMembers(['Bru'])
    });

    it('does hold the same elements', () => {
        expect(a).toIncludeSameMembers(["Cass", "Bob", "Bruce"]);
    });

    it('does hold partial substring in any element', () => {
        expect(a).not.toPartiallyContain('bad');
    });

    it('does all values in array pass given predicate/filter condition(s)', () => {
        const longerThan3LettersAndCapitalized = el => el.length >= 3 && el[0] === el[0].toUpperCase();
        expect(a).toSatisfyAll(longerThan3LettersAndCapitalized);
    });

    it('are the elements given in array in range', () => {
        expect([5, 10, 1, 15]).toBeInRange(1, 16);
    })
})

describe('date', () => {
    const d = new Date();

    it('is date', () => {
        expect(d).toBeDate();
    })

    it('is valid date', () => {
        expect(d).toBeValidDate();
    })

    it('is after specified date', () => {
        expect(d).toBeAfter(new Date('08-10-2021'));
    })
})

describe('number', () => {
    const n = 17;

    it('is number', () => {
        expect(n).toBeNumber();
    })

    it('is negative', () => {
        expect(n * -1).toBeNegative();
    })

    it('is odd', () => {
        expect(n).toBeOdd();
    })

    it('is greater than 16 but less than 18', () => {
        const greaterThan16LessThan18 = n => n > 16 && n < 18;
        expect(n).toSatisfy(greaterThan16LessThan18)
    })
})

describe('string', () => {
    const s = 'Hello, Educative!';

    it('is string', () => {
        expect(s).toBeString();
    })

    it('is equal case insensitive', () => {
        expect(s).toEqualCaseInsensitive('hello, educative!');
    })

    it('is ends with !', () => {
        expect(s).toEndWith('!');
    })   
})

    
