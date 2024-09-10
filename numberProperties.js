let x = Number.EPSILON;
let y = Number.MIN_SAFE_INTEGER;
let z = Number.MAX_SAFE_INTEGER;
const isInteger1 = Number.isInteger(10)
const isInteger2 = Number.isInteger(10.236)
const isSafeInteger1 = Number.isSafeInteger(10236)
const isSafeInteger2 = Number.isSafeInteger(10236265897525897563159)
console.log({x, y, z, isInteger1, isInteger2, isSafeInteger1,isSafeInteger2});