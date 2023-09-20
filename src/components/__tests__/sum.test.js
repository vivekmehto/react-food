import { sum } from "../Sum";

test("sum function 6 + 9 is 15", () => {
  const result = sum(6, 9);

  //Assertion
  expect(result).toBe(15);
});
