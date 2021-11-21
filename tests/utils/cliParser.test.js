const cliParser = require("../../src/utils/cliParser");

describe('Testing CLI Params', () => {
  const INPUT_CLI =  ['-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'];
  const NO_VALID_INPUT_CLI_1 =  ['', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'];
  const NO_VALID_INPUT_CLI_2 =  ['-c', '', '-i', './input.txt', '-o', './output.txt'];
  const NO_VALID_INPUT_CLI_3 =  ['-c', '', '-i', './input1.txt', '-o', './output.txt'];

  const RESULT_OBJECT =  {
    config: { valid: true, param: 'C1-C1-R0-A' },
    input: { valid: true, param: './input.txt' },
    output: { valid: true, param: './output.txt' }
  };

  test('CLI params test', () => {
    expect(cliParser(INPUT_CLI)).toEqual(RESULT_OBJECT);
  });

  test('CLI test no valid -c or --config argument', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    cliParser(NO_VALID_INPUT_CLI_1);
    expect(mockExit).toHaveBeenCalledWith(1);
  })

  test('CLI test no valid -c or --config param', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    cliParser(NO_VALID_INPUT_CLI_2);
    expect(mockExit).toHaveBeenCalledWith(1);
  })

  test('CLI test input file exists', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    cliParser(NO_VALID_INPUT_CLI_3);
    expect(mockExit).toHaveBeenCalledWith(1);
  })

})
