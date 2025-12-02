import reduce from "../reduce.js";
describe("reduce()", () => {
  test("adds up all numbers in an array with an initial value", () => {
    const result = reduce([1, 2, 3, 4], (acc, num) => acc + num, 0);
    expect(result).toBe(10);
  });
  test("adds up all numbers in an array without an initial value", () => {
    const result = reduce([1, 2, 3, 4], (acc, num) => acc + num);
    expect(result).toBe(10);
  });
  test("reduces an object into a grouped result", () => {
    const input = { a: 1, b: 2, c: 1 };
    const result = reduce(
      input,
      (acc, value, key) => {
        (acc[value] || (acc[value] = [])).push(key);
        return acc;
      },
      {}
    );
    expect(result).toEqual({ 1: expect.arrayContaining(["a", "c"]), 2: ["b"] });
  });
  test("handles string concatenation correctly", () => {
    const result = reduce(["h", "a", "s", "s", "a", "n"], (acc, ch) => acc + ch, "");
    expect(result).toBe("hassan");
  });
  test("handles boolean reductions", () => {
    const result = reduce([true, true, false], (acc, val) => acc && val, true);
    expect(result).toBe(false);
  });
  test("returns initial value when given an empty array", () => {
    const result = reduce([], (acc, val) => acc + val, 100);
    expect(result).toBe(100);
  });
  test("returns undefined for empty array without initial value", () => {
  const result = reduce([], (acc, val) => acc + val);
  expect(result).toBeUndefined();
  });
  test("reduces large numeric arrays efficiently", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
    const result = reduce(arr, (acc, n) => acc + n, 0);
    expect(result).toBe(500500);
  });
  test("works for object accumulation without an specified starting point", () => {
    const obj = { x: 10, y: 20, z: 30 };
    const result = reduce(obj, (acc, val) => acc + val);
    expect(result).toBe(60);
  });
  test("uses index and collection correctly inside iteration", () => {
    const calls = [];
    reduce([10, 20], (acc, value, index, collection) => {
      calls.push([acc, value, index, Array.isArray(collection)]);
      return acc + value;
    }, 0);
    expect(calls).toEqual([
      [0, 10, 0, true],
      [10, 20, 1, true],
    ]);
  });
});