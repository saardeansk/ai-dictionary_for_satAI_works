const readline = require('readline')
const rl = readline.createInterface({
input : process.stdin,
  output : process.stdout
});
rl.question ("enter the value of a : ",(m) =>{
rl.question("enter the value of b : ",(n) =>{
     let a = Number(m)
      let b = Number(n)
    if (!isNaN(a) && !isNaN(b))
    { 
         let sum = a + b
          console.log("sum of two values" , sum)
        }

    else
    {
        console.log("enter the valid input:")
        console.log("only numbers")
    }
    rl.close()
 });
}); 


    


