const cliParser = require("./src/utils/cliParser");

const CaesarCipherTransform = require("./src/myStream/caesarCipherTransform");
const RotCipherTransform = require("./src/myStream/rotCipherTransform");
const AtbashCipherTransform = require("./src/myStream/atbashCipherTransform");
const MyReadStream = require("./src/myStream/myReadStream");
const MyWriteStream = require("./src/myStream/myWriteStream");

const { pipeline } = require('stream');

const paramsObject = cliParser(process.argv.slice(2));

console.log(process.argv.slice(2));

function getArrayTransformStream (param) {
  const paramArray = param.split('-');
  let streamArray = [];

  paramArray.forEach((item) => {
    if (item === 'A') {
      streamArray.push(new AtbashCipherTransform())

    } else if (item === 'C0') {
      streamArray.push(new CaesarCipherTransform('decode'))

    } else if (item === 'C1') {
      streamArray.push(new CaesarCipherTransform(''))

    } else if (item === 'R0') {
      streamArray.push(new RotCipherTransform('decode'))

    } else if (item === 'R1') {
      streamArray.push(new RotCipherTransform(''))

    }
  })

  return streamArray;
}

const execute = (paramsObject) => {
  let inputStream, outputStream;
  const streamArray = getArrayTransformStream(paramsObject.config.param)

  if (!paramsObject.input.valid && !paramsObject.output.valid) {
    inputStream = process.stdin;
    outputStream = process.stdout;

  } else if (paramsObject.input.valid && !paramsObject.output.valid) {
    inputStream = new MyReadStream(paramsObject.input.param);
    outputStream = process.stdout;

  } else if (!paramsObject.input.valid && paramsObject.output.valid) {
    inputStream = process.stdin;
    outputStream = new MyWriteStream(paramsObject.output.param);

  } else if (paramsObject.input.valid && paramsObject.output.valid) {
    inputStream = new MyReadStream(paramsObject.input.param);
    outputStream = new MyWriteStream(paramsObject.output.param);

  }

  pipeline(
    inputStream,
    ...streamArray,
    outputStream,
    (err) => {
      if (err) {
        console.error(`${err.code} Есть проблемы`);
        process.exit(-1);
      } else {
        console.log('Выполнено!');
      }
    }
  );
}

execute(paramsObject);

