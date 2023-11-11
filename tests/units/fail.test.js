
describe('failure', () => {  
    test('false is true', () => {
        let a = false;
        let b = true;
        expect(a).not.toBeTruthy();
    })
})