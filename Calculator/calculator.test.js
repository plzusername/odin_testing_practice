import { calcuator } from "./calculator";

test('Returns string in a reversed order', () => {
    const num1 = 12
    const num2 = 93

  expect(calcuator.add(num1,num2)).toEqual(num1 + num2);

  expect(calcuator.subtract(num1,num2)).toEqual(num1 - num2);

  expect(calcuator.multiply(num1,num2)).toEqual(num1 * num2);

  expect(calcuator.divide(num1,num2)).toEqual(num1 / num2);
});

