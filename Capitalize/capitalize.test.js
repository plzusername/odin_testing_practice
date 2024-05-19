import { Capitalize } from "./capitalize";

test('Returns capitalised version of inputted string', () => {
    const string = 'fjkorigffd'
  expect(Capitalize(string)).toBe(`${string.toUpperCase()}`);
});

