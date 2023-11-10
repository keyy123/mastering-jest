const log = require('./utils/helpers/color-message');
class myCustomReporter {
    onRunComplete(test, results) {
        if (results.numFailedTests > 0) {
            log(`🤔 Think about why it failed and what will be different in next attempt. Keep Trying! 💪🏽`, 'error');
        } else {
            log(`🎉 Good work! All test cases have passed! 😁`, 'success');
        }
    }
}

module.exports = myCustomReporter;