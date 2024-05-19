import { analyzeArray } from "./analyzeArray";

test('Returns an object of statistics relaated to the inputed (numerical)array', () => {
  expect(analyzeArray([1,2,3,4,5,6,7,8,9,10])).toEqual({
    length:10,
    min:1,
    max:10,
    average:5.5
  });
});