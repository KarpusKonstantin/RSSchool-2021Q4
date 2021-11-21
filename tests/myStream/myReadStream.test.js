const { Readable } = require('stream');
const path = require('path');
const fs = require('fs');

const MyReadStream = require("../../src/myStream/myReadStream");

describe('Read stream test', () => {
  const TEST_FILE = path.resolve(__dirname,  '..', '..',  'tests/myStream/test.txt');
  const FAIL_TEST_FILE = path.resolve(__dirname,  '..', '..',  'tests/myStream/test-fail.txt');
  const readObject = new MyReadStream(TEST_FILE);

  test('should be instance of Readable stream', ()=>{
    expect( readObject instanceof Readable).toEqual(true);
  });

  test('MyReadStream can read file', async ()=>{
    let result = ''

    for await (const chunk of readObject) {
      result = result + chunk;
    }

    expect(result.trim()).toEqual('This is secret. Message about "_" symbol!');
  });

});
