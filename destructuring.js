// object destructuring
const obj = {
  name: 'sarika mahboob',
  gender: 'female',
  age: 16
}

const { gender, name } = obj;
console.log(gender, name)

// array destructuring
const arr = [ 'leo' , "suarez", 'neymar' ]

const [ player1, player2, player3 ] = arr
console.log(player1)