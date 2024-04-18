const { product, longest, everyOther, isPalindrome, findIndex, revString, gatherStrings } = require('./recursionExercises');

describe("Recursion Functions", () => {
  test('product calculates the product of items in an array', () => {
    expect(product([2, 3, 4])).toBe(24);
  });

  test('longest finds the length of the longest word', () => {
    expect(longest(["hello", "hi", "hola"])).toBe(5);
  });

  test('everyOther returns every other character', () => {
    expect(everyOther("hello")).toBe("hlo");
  });

  test('isPalindrome checks if a string is a palindrome', () => {
    expect(isPalindrome("tacocat")).toBe(true);
    expect(isPalindrome("tacodog")).toBe(false);
  });

  test('findIndex finds the index of an item in an array', () => {
    expect(findIndex(["duck", "cat", "pony"], "cat")).toBe(1);
    expect(findIndex(["duck", "cat", "pony"], "dog")).toBe(-1);
  });

  test('revString reverses a string', () => {
    expect(revString("porcupine")).toBe("enipucrop");
  });

  test('gatherStrings collects all string values from a nested object', () => {
    const obj = {
      firstName: "Lester",
      favoriteNumber: 22,
      moreData: {
        lastName: "Testowitz"
      },
      funFacts: {
        moreStuff: {
          anotherNumber: 100,
          deeplyNestedString: {
            almostThere: {
              success: "you made it!"
            }
          }
        },
        favoriteString: "nice!"
      }
    };
    expect(gatherStrings(obj)).toEqual(["Lester", "Testowitz", "you made it!", "nice!"]);
  });
});
