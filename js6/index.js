// Fahrenhei to Celsius
var farn = parseFloat(prompt("Enter Fahrenheit = "));
var cels = (farn - 32) * (5/9);

document.write("Celsius = " + cels + "<br/>");

// Celsius to Fahrenheit
cels = parseFloat(prompt("Enter Celsius = "));
farn = (cels * (9/5)) + 32;

document.write("Fahrenheit = " + farn);