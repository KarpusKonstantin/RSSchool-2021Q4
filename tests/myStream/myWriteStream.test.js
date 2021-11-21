const { Writable } = require('stream');

const MyWriteStream = require("../../src/myStream/myWriteStream");

describe('Write stream test', () => {
  const OUTPUT_FILE_PATH = './output.txt';

  test('should be instance of Writable stream', ()=>{
    const writeObject = new MyWriteStream(OUTPUT_FILE_PATH);

    expect( writeObject instanceof Writable).toEqual(true);
  });
});
