const { Writable } = require('stream');

const path = require('path');
const fs = require('fs');

const MyWriteStream = require("../../src/myStream/myWriteStream");

describe('Write stream test', () => {
  const TEST_WRITE_FILE = path.resolve(__dirname,  '..', '..',  'tests/myStream/test-write.txt');
  const writeObject = new MyWriteStream(TEST_WRITE_FILE);

  test('should be instance of Writable stream', ()=>{

    expect( writeObject instanceof Writable).toEqual(true);
  });

});
