// 😁 DESCRIPTION   Grasshopper - Terminal game combat function
//Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// 🐱‍👤TESTS
//Test.assertEquals(combat(100, 5), 95);
// Test.assertEquals(combat(92, 8), 84);
// Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0")

// 👨‍💻SOLUTION

// MyVariant
function combat(health, damage) {
    let remainderHealth = health - damage
    return remainderHealth < 0 ? 0 : remainderHealth   // В тесте имелось ввиду, что если ниже 0 здоровье, то выдаст 0, а не текст
}
console.log(combat(100, 100));

// Var2
// function combat(health, damage) {
//   return Math.max(health - damage, 0);
// }

