require('colors');
const { SUCCESS, ERROR, WARNING } = require('./message-type-helper.js');

module.exports = function colored_message(msg, type) {
    let colored_msg;
    switch (type) {
        case SUCCESS:
            colored_msg = `[SUCCESS]: ${msg.green}`;
            break;
        case ERROR:
            colored_msg = `[ERROR]: ${msg.red}`;
            break;
        case WARNING:
            colored_msg = `[WARNING]: ${msg.yellow}`
            break;
        default:
            colored_msg = `[INFO]: ${msg}`;
    }
    console.log(colored_msg);
}

