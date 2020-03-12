function calc(){
// Java Calc
"Welcome to my first JavaScript program, the Java Calculator!"
var firstName = prompt("Please enter your First Name");
var lastName = prompt("Please enter your Last Name");
var userName = firstName + " " + lastName;
alert("Thank you " +userName+ " Please click 'OK' to start using my Java Calculator!...")
var oper = prompt("Which type of operation would you like to perform? \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division")
var first = prompt("Please enter the first number");
var second = prompt("Please enter the second number");
if (oper == 1){
var sum = Number(first) + Number(second);
}
else if (oper == 2){
var sum = Number(first) - Number(second);
}
else if (oper == 3){
var sum = Number(first) * Number(second);
}
else if (oper == 4){
var sum = Number(first) / Number(second);
}
alert("Thank you " +userName+ "! The answer is: " + sum);
}