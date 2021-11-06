const atbashCipher = (str) => {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode((25 - (code - 65) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode((25 - (code - 97) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
};

module.exports = atbashCipher;
