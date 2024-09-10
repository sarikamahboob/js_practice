const playerNames1 = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar Jr.",
  "Kylian Mbappé",
  "Erling Haaland",
];
const playerNames2 = [
  "Robert Lewandowski",
  "Kevin De Bruyne",
  "Harry Kane",
  "Mohamed Salah",
  "Karim Benzema"
];

const playerNamesDes = [ ...playerNames1, ...playerNames2 ]
const playerNames = [ playerNames1, ...playerNames2 ]
console.log(playerNamesDes)
console.log(playerNames)

const numbers = [23,55,21,87,56];
const maxNumber = Math.max(...numbers)
console.log(maxNumber)