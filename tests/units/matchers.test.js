
test('.toBe()', () => {
    expect(6 * 7).toBe(42);

    expect([].length).toBe(0);

    expect(Object.keys({}).length).toBe(0);

    let count = 0;
    
    function add5() {
        count += 5;
        return count;
    }

    const t = jest
        .fn(add5, {times: 3})
        

    expect(t()).toBe(5);
    expect(t()).toBe(10);
    expect(t()).toBe(15);

})

test('.toMatch()', () => {
    expect('Hello, Educative!').toMatch(/Hello/);

    expect('Hello, Educative!').toMatch(/Educative!/);

    expect('Henlo, billy').toMatch(/billy/);
})

test('.toBeTruthy()', () => {
    expect(2 === 2).toBeTruthy();

    expect(!false).toBeTruthy();

    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
})

test('.toBeFalsy()', () => {
    expect(2 === 3).toBeFalsy();

    expect(!true).toBeFalsy();

    
    expect([]).toBeTruthy();

    expect({}).toBeTruthy();
})

test('.toHaveBeenCalled()', () => {
    const mock1 = jest.fn()
    const mock2 = jest.fn();
    mock1();

    expect(mock1).toHaveBeenCalled();
    expect(mock2).not.toHaveBeenCalled();
})

test('.toBeNull()', () => {
    let v = null;

    expect(v).toBeNull();
    expect(14).not.toBeNull();
})

test('.toContain()', () => {
    const users = ['Johnny', 'Cass', 'Bob'];

    expect(users).toContain('Cass');

    expect(users).toContain('Bob');
})

test('.not', () => {
    expect(['Johnny', 'Cass', 'Bob']).not.toContain('Mick');

    expect(14 + 2).not.toEqual(17);

    let v = 17;
    expect(v).not.toBeUndefined(); 
})

test('object equality', () => {
    const obj1 = { firstName: 'Bob', lastName: 'Dylan' };
    const obj2 = { firstName: 'Cass', lastName: 'Elliot' };
    
    expect(Object.is(obj1, obj1)).toBe(true);
    
    expect(Object.is(obj1, obj2)).toBe(false);
})
