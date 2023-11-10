
describe('failure', () => {  
    test('false is true', () => {
        let a = false;
        let b = true;
        debugger;
        expect(a).not.toBeTruthy();
    })
})