const a = isFinite(10/0)
const b = isFinite(10/1)
const c = isFinite(10/2)
const isNaN1 = isNaN("10")
const isNaN2 = isNaN("sa")
const isNaN3 = isNaN(10)
console.log(a,b,c,isNaN1,isNaN2,isNaN3)