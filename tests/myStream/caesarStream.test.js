const CaesarCipherTransform = require("../../src/myStream/caesarCipherTransform");

const { Transform, pipeline } = require('stream');

const caesarObject = new CaesarCipherTransform();

(async () => await pipeline('This is secret. Message about "_" symbol!',
  caesarObject,
  (e) => {  }
))();


describe('Caesar stream test', () => {
  const OUTPUT =  'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!';

  let result = '';

  beforeEach(async () => {

    caesarObject.on("data", (data) => {
      result = result + data.toString();
    });
  })

  test("should be instance of Transform stream", ()=>{
    expect( caesarObject instanceof Transform).toEqual(true);
  });

  test("test work class CaesarCipherTransform", ()=>{
    expect(result).toEqual(OUTPUT);
  });

});
