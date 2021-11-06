const cliParser = require("./src/utils/cliParser");
const shiftCiphers = require("./src/ciphers/shiftCipher");
const atbashCipher = require("./src/ciphers/atbashCipher");

const a = cliParser(process.argv.slice(2));

