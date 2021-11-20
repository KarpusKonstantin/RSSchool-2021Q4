const shiftCipher = require("../../src/ciphers/shiftCipher");
const atbashCipher = require("../../src/ciphers/atbashCipher");

describe('Ciphering tests', () => {
  test('Caesar test encode', () => {
    expect(shiftCipher('', 'This is secret. Message about "_" symbol!', 1))
      .toEqual('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!');

  });

  test('Caesar test decode', () => {
    expect(shiftCipher('decode', 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!', 1))
      .toEqual('This is secret. Message about "_" symbol!');

  });

  test('ROT test encode', () => {
    expect(shiftCipher('', 'This is secret. Message about "_" symbol!', 8))
      .toEqual('Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!');

  });

  test('ROT test decode', () => {
    expect(shiftCipher('decode', 'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!', 8))
      .toEqual('This is secret. Message about "_" symbol!');

  });

  test('Atbash test encode', () => {
    expect(atbashCipher( 'This is secret. Message about "_" symbol!'))
      .toEqual('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!');

  });

  test('Atbash test decode', () => {
    expect(atbashCipher('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!'))
      .toEqual('This is secret. Message about "_" symbol!');

  });
})
