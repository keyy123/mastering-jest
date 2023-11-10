```sh
npm init jest 
```

This snippet above will cause jest to ask questions in CLI and create a config file for project.

```sh
// custom-reporter.js
class myCustomReporter {
    onRunComplete(test, results) {
        if (results.numFailedTests > 0) {
            console.log(`Think about why it failed and what will be different in next attempt. Keep Trying!`);
        } else {
            console.log(`Good work!`);
        }
    }
}

module.exports = myCustomReporter;
```

```sh
// jest.config.js


module.exports = {
    reporters: [
        'default',
        `${process.cwd()}/custom-reporter.js`
    ]
}
```

We can make a reporter that tell us something after all the jest test have been completed. The one I made runs after all tests are completed and check if any failures happened. If it does, we log a helpful msg to try again while if no fails happen we tell ourselves good work!. In jest config, we add our custom made config under `reporters` array under `default` so we can still keep convenient reporting from jest and add ours on top.

read more [here](https://github.com/jestjs/jest/blob/main/packages/jest-reporters/src/types.ts)