const cliParser = require("../../src/utils/cliParser");

describe('Testing CLI Params', () => {
  const INPUT_CLI =  [
      '-c',
      'C1-C1-R0-A',
      '-i',
      './input.txt',
      '-o',
      './output.txt'
    ];

  const RESULT_OBJECT =  {
    config: { valid: true, param: 'C1-C1-R0-A' },
    input: { valid: true, param: './input.txt' },
    output: { valid: true, param: './output.txt' }
  };

  test('CLI params test', () => {
    expect(cliParser(INPUT_CLI))
      .toEqual(RESULT_OBJECT);

  });

})
