// PROMPT: Your task is to split the chocolate bar of given dimensions n x m into small
// squares. Each square is of size 1x1 and unbreakable. Implement a function that returns
// minimum number of breaks needed. For example, if you are given a chocolate bar of size
// 2 x 1 you can split it into single squares in just one break, but for size 3 x 1 you
// can do two breaks. If input is invalid, return 0 (as in no breaks are needed if we do
// not have any chocolate to split). Input will always be positive integer.

const breakingBars = (n, m) => {
  let breaks = (n * m) - 1

  if (breaks === 0) {
    return 0
  } else {
    return breaks
  }
}

console.log(breakingBars(2, 2))
