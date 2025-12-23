
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout // Fixed spelling (added 't')
});

// 1. Ask the first question
rl.question("Enter the value of n: ", (n) => {
rl.question("enter the table you want to print :",(a) => {
  function tables()
  {
    console.log("the",a,"table :")
   for (var i = 1; i < n ;i +=1)
   {
     console.log(a ,"*",i,"=",a * i )
   }
  }
  function loop()
  {
   let i = 0
   while(i<5)
   {
     console.log("while")
     i++
   }
   i=0
   do{
    console.log("dowhile")
    i++
   }while(i<5);
   var array = ["sathish","arun","madhan"]
   for(key in array)
   {
    console.log("thefor in: ",array[key])
   }
   for(man of array)
   {
     console.log("the forof :",man)
   }
   array.forEach(function(item,index)
   {
      console.log("the index",index,item)
   })
   rl.close()
  }
  tables()
  loop()
  })
})