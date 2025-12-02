import filter from "../filter.js";
describe("filter()", () => {
  test("keeps only numbers that match the condition", () => {
    const result = filter([1, 2, 3, 4, 5], (value) => value > 2);
    expect(result).toEqual([3, 4, 5]);
  });
  test("filters an array of objects by active users example", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const result = filter(users, (user) => user.active);
    expect(result).toEqual([{ user: "barney", active: true }]);
  });
  test("when nothing matches, it returns []", () => {
    const result = filter([1, 2, 3], (value) => value > 10);
    expect(result).toEqual([[]]);
  });
  test("passes value, index and array to the predicate", () => {
    const calls = [];
    const input = ["a", "b", "c"];
    filter(input, (value, index, array) => {
      calls.push([value, index, array]);
      return true;
    });
    expect(calls).toEqual([
      ["a", 0, input],
      ["b", 1, input],
      ["c", 2, input],
    ]);
  });
  test("when input array is empty, it also returns [ [] ]", () => {
    const result = filter([], () => true);
    expect(result).toEqual([[]]);
  });
  test("treats null or undefined as an empty array", () => {
    const resultNull = filter(null, () => true);
    const resultUndefined = filter(undefined, () => true);
    expect(resultNull).toEqual([[]]);
    expect(resultUndefined).toEqual([[]]);
  });
  test("can filter using the index", () => {
    const input = ["zero", "one", "two", "three", "four"];
    const result = filter(input, (value, index) => index % 2 === 0);
    expect(result).toEqual(["zero", "two", "four"]);
  });
});