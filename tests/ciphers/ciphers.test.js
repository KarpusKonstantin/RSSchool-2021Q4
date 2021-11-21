const shiftCipher = require("../../src/ciphers/shiftCipher");
const atbashCipher = require("../../src/ciphers/atbashCipher");

describe('Ciphering tests', () => {
  const DATA =  'This is secret. Message about "_" symbol!';

  test('Caesar test encode', () => {
    expect(shiftCipher('', DATA, 1))
      .toEqual('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!');

  });

  test('Caesar test decode', () => {
    expect(shiftCipher('decode', 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!', 1))
      .toEqual(DATA);

  });

  test('ROT test encode', () => {
    expect(shiftCipher('', DATA, 8))
      .toEqual('Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!');

  });

  test('ROT test decode', () => {
    expect(shiftCipher('decode', 'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!', 8))
      .toEqual(DATA);

  });

  test('Atbash test encode', () => {
    expect(atbashCipher( DATA))
      .toEqual('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!');

  });

  test('Atbash test decode', () => {
    expect(atbashCipher('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!'))
      .toEqual(DATA);

  });
})
