var  num1, num2, num3;

num1 = prompt("Enter first Number : ");
num2 = prompt("Enter second Number : ");
num3 = prompt("Enter theird Number : ");


if (num1>num2 && num1>num3)
    document.write("Lage Number " + num1 + "<br/>");


else if (num2>num1 && num2>num3)
    document.write("Lage Number " + num2 + "<br/>");

else
    document.write("Lage Number " + num3 + "<br/>");


// vowel / consonant

var letter = prompt("Enter a Letter :");
letter = letter.toLowerCase();
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    document.write("Vowel Letter = " + letter);
else
    document.write("Consonant Letter = " + letter);
