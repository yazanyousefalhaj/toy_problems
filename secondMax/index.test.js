/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

const secondMax = function(array) {
  array.splice(array.indexOf(Math.max(...array)), 1)
  return Math.max(...array)
};


describe('Tests', () => {
  it('test secondMax', () => {
    expect(secondMax([1,5, 2])).toStrictEqual(2);
    expect(secondMax([-1, -5, 2])).toStrictEqual(-1);
  });
});
