const path = require('path');
const fs = require('fs');

const checkParams = (paramsObj) => {
  let param;

  if (!paramsObj.config.valid) {
    process.stderr.write('-- Не задан аргумент -c или --config');
    process.exit(1);

  } else if ((paramsObj.config.valid) && (paramsObj.config.param === '')) {
    process.stderr.write('-- Для аргумента -c или --config не указана строка параметров ');
    process.exit(1);

  } else {
    param = paramsObj.config.param;

    const bool = param.split('-')
      .map(item => item.toUpperCase())
      .every(item => item === 'A' || item === 'C1' || item === 'C0' || item === 'R1' || item === 'R0');

    if (!bool) {
      process.stderr.write('-- Для аргумента -c или --config параметры заданы некорректно');
      process.exit(1);
    }
  }

  if (paramsObj.input.valid) {
    if (paramsObj.input.param === '') {
      process.stderr.write('-- Для аргумента -i или --input не указан путь к файлу');
      process.exit(1);

    } else {
      const inputPath = path.resolve(__dirname, '..', '..', paramsObj.input.param);

      if (!fs.existsSync(inputPath)) {
        process.stderr.write(`-- Не найден файл ${paramsObj.input.param}`);
        process.exit(1);
      }
    }
  }

  if (paramsObj.output.valid) {
    if (paramsObj.output.param === '') {
      process.stderr.write('-- Для аргумента -o или --output не указан путь к файлу');
      process.exit(1);

    } else {
      const outputPath = path.resolve(__dirname,  '..', '..',  paramsObj.output.param);

      if (!fs.existsSync(outputPath)) {
        process.stderr.write(`-- Не найден файл ${paramsObj.output.param}`);
        process.exit(1);
      }
    }
  }

}

const cliParser = (paramsArray) => {
  let paramsObj = {
    config: {
      valid: false,
      param: '',
    },
    input: {
      valid: false,
      param: '',
    },
    output: {
      valid: false,
      param: '',
    },
  }

  paramsArray.forEach((item, idx) => {
    const s = item.toUpperCase();

    if ((s === '-C') || (s === '--CONFIG')) {
      if (!paramsObj.config.valid) {
        paramsObj.config.valid = true;
      } else {
        process.stderr.write('-- Дублирование аргумента -c или --config');
        process.exit(1);
      }

      if (paramsArray[idx + 1]) {
        paramsObj.config.param = paramsArray[idx + 1];
      }
    }

    if ((s === '-I') || (s === '--INPUT')) {
      if (!paramsObj.input.valid) {
        paramsObj.input.valid = true;
      } else {
        process.stderr.write('-- Дублирование аргумента -i или --input');
        process.exit(1);
      }

      if (paramsArray[idx + 1]) {
        paramsObj.input.param = paramsArray[idx + 1];
      }
    }

    if ((s === '-O') || (s === '--OUTPUT')) {
      if (!paramsObj.output.valid) {
        paramsObj.output.valid = true;
      } else {
        process.stderr.write('-- Дублирование аргумента -o или --output');
        process.exit(1);
      }

      if (paramsArray[idx + 1]) {
        paramsObj.output.param = paramsArray[idx + 1];
      }
    }
  });

  checkParams(paramsObj);

  return paramsObj;
};

module.exports = cliParser;
