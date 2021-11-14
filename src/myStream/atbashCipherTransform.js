const atbashCipher = require("../ciphers/atbashCipher");
const { Transform } = require('stream');


class AtbashCipherTransform extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    try {
      const resultString = atbashCipher(chunk.toString('utf-8'));
      callback(null, resultString);
    } catch (e) {
      callback(e)
    }
  }
}

module.exports = AtbashCipherTransform;
