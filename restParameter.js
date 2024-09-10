function sum( ...args ) {
  let a = 0
  for ( let i of args ) {
    a += i
  }
  return a
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x)