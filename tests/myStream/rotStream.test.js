const RotCipherTransform = require("../../src/myStream/rotCipherTransform");

const { Transform, pipeline } = require('stream');

const rotObject = new RotCipherTransform();

(async () => await pipeline('This is secret. Message about "_" symbol!',
  rotObject,
  (e) => {  }
))();


describe('ROT stream test', () => {
  const OUTPUT =  'Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!';

  let result = '';

  beforeEach(async () => {

    rotObject.on("data", (data) => {
      result = result + data.toString();
    });
  })

  test("should be instance of Transform stream", ()=>{
    expect( rotObject instanceof Transform).toEqual(true);
  });

  test("test work class RotCipherTransform", ()=>{
    expect(result).toEqual(OUTPUT);
  });

});
