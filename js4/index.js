
var num1, num2;

num1 = prompt("Enter your first number : ");
num2 = prompt("Enter your second number : ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var Addition, Subtraction, Multiplication, Exponentiation, Division, Remainder;

Addition = num1 + num2;
document.write("Addition = " + Addition + "<br/>");

Subtraction = num1 - num2;
document.write("Subtraction = " + Subtraction + "<br/>");

Multiplication = num1 * num2;
document.write("Multiplication = " + Multiplication + "<br/>");

Exponentiation = num1 ** num2;
document.write("Exponentiation = " + Exponentiation + "<br/>");

Division = num1 / num2;
document.write("Division = " + Division + "<br/>");

Remainder = num1 % num2;
document.write("Remainder = " + Remainder + "<br/>");

