const AtbashCipherTransform = require("../../src/myStream/atbashCipherTransform");

const { Transform, pipeline } = require('stream');

const atbashObject = new AtbashCipherTransform();

(async () => await pipeline('This is secret. Message about "_" symbol!',
  atbashObject,
  (e) => {  }
))();


describe('Atbash transform stream test', () => {
  const OUTPUT =  'Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!';

  let result = '';

  beforeEach(async () => {

    atbashObject.on("data", (data) => {
      result = result + data.toString();
    });
  })

  test('should be instance of Transform stream', ()=>{
    expect( atbashObject instanceof Transform).toEqual(true);
  });

  test('test work class AtbashCipherTransform', ()=>{
    expect(result).toEqual(OUTPUT);
  });
});
