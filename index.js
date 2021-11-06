const cliParser = require("./src/utils/cliParser");

const a = cliParser(process.argv.slice(2));

console.log('Params Object >>', a);
