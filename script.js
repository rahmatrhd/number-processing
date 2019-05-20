function min(arr) {
  // 1. sort ascending -> get first item
  // 2. Math.min()
  // 3. Array.reduce()
  
  return Math.min(...arr)
}

function max(arr) {
  return arr.reduce(function(x, y) {
    return (x > y) ? x : y
  })
}

function mean(arr) {

}

function odds(arr) {

}

function evens(arr) {

}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([-9, 3, 5, 1, 2, 8, 10, 1, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"