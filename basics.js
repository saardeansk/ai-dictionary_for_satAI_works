
 const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout // Fixed spelling (added 't')
});

// 1. Ask the first question
rl.question("Enter the value of a: ", (a) => {
  
  // All code using 'a' must be inside these curly braces
  console.log("Value of a is: " + a);

  // You can still use regular variables here
  var v = 20;
  console.log("Value of v is: " + v);

  // 2. To ask a second question, put it INSIDE the first one
  rl.question("Enter value of constant: ", (vari) => {
    console.log("Value of constant is: " + vari);

    // 3. Close the interface only after the LAST question is answered
    rl.close(); 
  });
});
