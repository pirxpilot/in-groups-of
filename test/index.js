const { describe, it } = require('node:test');
const inGroupsOf = require('..');

describe('inGroupsOf(arr, n)', function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('should return array in groups of N', function (t) {
    t.assert.deepStrictEqual(inGroupsOf(nums, 5), [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ]);

    t.assert.deepStrictEqual(inGroupsOf(nums, 4), [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10]
    ]);

    t.assert.deepStrictEqual(inGroupsOf(nums, 2), [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10]
    ]);

    t.assert.deepStrictEqual(inGroupsOf(nums, 1), [
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
      [7],
      [8],
      [9],
      [10]
    ]);
  });

  it('should not change array if n is 0', function (t) {
    t.assert.equal(inGroupsOf(nums, 0), nums);
  });

  it('should return empty array if arr is empty', function (t) {
    t.assert.deepStrictEqual(inGroupsOf([], 1), []);
    t.assert.deepStrictEqual(inGroupsOf([], 5), []);
    t.assert.deepStrictEqual(inGroupsOf([], 5), []);
  });
});
