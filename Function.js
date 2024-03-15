function factorial(n1)
{
     let m=1;
     for(let i=n1; i>1; i--)
     {
         m*=i;
     }
     return m;
}             
                        

console.log("\nThe Factorial of "+5+" is = "+factorial(5)+"\n")

let ok = factorial(10);

console.log("\nThe Factorial of "+10+" is = "+ok+"\n")

console.log("\nThe Factorial of "+ok+" is = "+factorial(ok)+"\n");