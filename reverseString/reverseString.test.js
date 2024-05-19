import { reverseString } from "./reverseString";

test('Returns string in a reversed order', () => {
    const string = 'fjkorigffd'
  expect(reverseString(string)).toBe(`${string.split('').reverse().join('')}`);
});

