/*
var num = 5;

if(num%2==0)
document.write("even");

if(num%2!=0)
document.write("odd");
*/

/*
var num = 5;

if(num % 2 == 0)
console.log("Even");

else
console.log("odd");
*/

var num = parseInt(prompt("Enter Your Marks = "));

if (num >= 80 && num <= 100 )
    console.log("Congratulations! Your result is A+");

else if (num >= 70 && num <=79 )
    console.log("Congratulations! Your result is A");

else if (num >= 60 && num <=69 )
    console.log("Congratulations! Your result is A-");

else if (num >= 50 && num <=59 )
    console.log("Congratulations! Your result is B");

else if (num >= 40 && num <=49 )
    console.log("Congratulations! Your result is C");

else if (num >= 33 && num <=39 )
    console.log("Congratulations! Your result is D");

else
    console.log("Sorry! You did Fail " + "<br/>" + "But Never Give Up ");