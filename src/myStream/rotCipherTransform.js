const shiftCipher = require("../ciphers/shiftCipher");
const { Transform } = require('stream');


class RotCipherTransform extends Transform {
  constructor(action) {
    super();
    this.action = action;
    this.shift = 8;
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

module.exports = RotCipherTransform;
