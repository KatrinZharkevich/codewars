// 😁 DESCRIPTION
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// 🐱‍👤TESTS
//Test.assertEquals(makeNegative(42), -42)

// 👨‍💻SOLUTION
function makeNegative(num) {
    if (num<=0){
        return num
    } else {
        let numNegative = -num
        return numNegative
    } 
}
console.log(makeNegative(0));

// Variant2
// function makeNegative(num) { 
//   return -Math.abs(num);
// }

// Variant3
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }