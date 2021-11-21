const { Readable } = require('stream');

const MyReadStream = require("../../src/myStream/myReadStream");

describe('Read stream test', () => {
  const INPUT_FILE_PATH = './input.txt';

  test('should be instance of Readable stream', ()=>{
    const readObject = new MyReadStream(INPUT_FILE_PATH);

    expect( readObject instanceof Readable).toEqual(true);
  });
});
