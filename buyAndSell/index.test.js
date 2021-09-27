/*
*
* Given an array representing prices of the stock on different days,
* find the maximum profit that can be earned by performing maximum of
* one transaction. A transaction consists of activity of buying and
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - [100, 80, 120, 130, 70, 60, 100, 125]
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65
* (buy at 60 and sell at 125).
* For price array - [100, 80, 70, 65, 60, 55, 50], maximum profit
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var maximumProfit = function (array) {
  const margins = []
  for (let i = 0; i < array.length - 1; i++) {
    margins.push(array[i + 1] - array[i])
  }
  console.log(margins)

  const maximumSubarray = (arr, begin, end) => {
    let a1 = 0
    let a2 = arr[0]
    arr.forEach((i,a) => {
      a1 = Math.max(i, a1 + i)
      a2 = Math.max(a2, a1)
    })
    return a2
  }
  const res = maximumSubarray(margins, 0, margins.length)
  return res < 0? 0: res;
}

describe("Tests", () => {
  it("test maximumProfit", () => {
    expect(maximumProfit([100, 80, 120, 130, 70, 60, 100, 125])).toEqual(65)
    expect(maximumProfit([100, 80, 70, 65, 60, 55, 50])).toEqual(0)
  });
});
