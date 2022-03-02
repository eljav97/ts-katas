import fizzBuzz from "./fizzBuzz";
test("logs fizzBuzz result", () => {
  expect(fizzBuzz([1, 3, 9, 10, 15])).toStrictEqual([
    1,
    "fizz",
    "fizz",
    "buzz",
    "fizzBuzz",
  ]);
  expect(fizzBuzz([1, 3, 5, 8])).toStrictEqual([1, "fizz", "buzz", 8]);
  expect(fizzBuzz([0, -15, -12, 17])).toStrictEqual([
    "fizzBuzz",
    "fizzBuzz",
    "fizz",
    17,
  ]);
});
