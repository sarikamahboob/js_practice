const letters = new Set()
letters.add("a")
letters.add("b")
letters.add("c")
const size = letters.size
const abc= [...letters]
for ( let x of abc ) {
  console.log(x)
}
console.log(letters, size, abc)
const nameAge = new Set()
nameAge.add({ name: "leo", age: 26})
nameAge.add({ name: "messi", age: 36})
nameAge.add({ name: "ronaldo", age: 46})
for (let person of nameAge) {
  console.log('age:' + person.age);
}
