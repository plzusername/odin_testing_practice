import { ceaserCipher } from "./ceaserChipher";

test('Returns string in a reversed order', () => {
  expect(ceaserCipher('HeLlO',1)).toEqual('IfMmP');

  expect(ceaserCipher('OBViously',3)).toEqual('REYlrxvob');
});

