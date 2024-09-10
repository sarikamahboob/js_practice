const carCompanies = [
  "Toyota",
  "Volkswagen",
  "Honda",
  "Ford",
  "Hyundai",
  "Kia",
  "Nissan",
  "General Motors",
  "Stellantis",
  "BMW",
  "Rolls Royce",
  "Mitsubishi"
];

for(let x of carCompanies) {
  console.log(x)
}

const favCar = "Rolls Royce"
let text = ""
for(let x of favCar) {
  text += x
}
console.log('Fav Car:', text)
