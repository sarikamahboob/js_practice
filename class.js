class Player {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  concat() {
    const concat = this.name + '-' + this.age
    return concat
  }
  sum(num1, num2) {
    const result = num1 + num2
    return result
  }
}

const player1 = new Player("leo", 26)
const player2 = new Player("messi", 33)
const player3 = new Player()
const player4 = new Player().sum(8,2)
console.log(player1.name, player2.age, player1.concat() , player2.concat(), player3.concat(), player4)