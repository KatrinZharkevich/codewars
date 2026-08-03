// 😁 DESCRIPTION   Grasshopper - Terminal game move function
//Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// 🐱‍👤TESTS
//Test.assertEquals(move(0, 4), 8);
// Test.assertEquals(move(3, 6), 15);
// Test.assertEquals(move(2, 5), 12);

// 👨‍💻SOLUTION
function move (position, roll) {
    return position + roll * 2
}
console.log(move(2, 5));
