const { errFunc } = require('../../utils/helpers/error.js');

describe('errorFunc', () => {
    // Function will throw, test will fail b/c errFunc will run before expect is done running
    test.skip('fails', () => {
        expect(errFunc()).toThrow();
    })
})
