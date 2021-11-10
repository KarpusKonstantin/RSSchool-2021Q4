const shiftCipher = require("../ciphers/shiftCipher");
const { Transform } = require('stream');


class CaesarCipherTransform extends Transform {
  constructor(action) {
    super();
    this.action = action;
    this.shift = 1;
  }

  _transform(chunk, encoding, callback) {
    try {
      const resultString = shiftCipher(this.action, chunk.toString('utf-8'), this.shift);
      callback(null, resultString);
    } catch (e) {
      callback(e)
    }
  }
}

module.exports = CaesarCipherTransform;
