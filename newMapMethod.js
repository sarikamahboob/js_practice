const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
const result = fruits.get("apples");

const fruitsAmount = new Map([
  [500, "apples"],
  [300, "bananas"],
  [200, "oranges"]
]);
fruitsAmount.set(400, "guava");
const amountOfFruit = fruitsAmount.get(400)
const result2 = fruitsAmount.get(400);
console.log(result2,amountOfFruit)
console.log(typeof fruitsAmount)
console.log(fruitsAmount instanceof Map)