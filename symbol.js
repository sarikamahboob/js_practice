const user = {
  name: 'John',
  age: 36,
  gender: 'male',
}

let id = Symbol('id')
let address = Symbol('address')
user[id] = 123456
user[address] = "mirpur"
console.log(user[id], user.id, user.age, user[address] )