function car(){
// Keyless Car
"Welcome to my second JavaScript program, the Java Keyless Car!"
var firstName = prompt("Please enter your First Name");
var lastName = prompt("Please enter your Last Name");
var userName = firstName + " " + lastName;
alert("Thank you " +userName+ " Please click 'OK' to begin...");
var driverAge = prompt(userName+", how old are you?");
if (Number(driverAge) < 18) {
	alert("Sorry " +userName+ ", you are too young to drive this car. Powering off!");
}else if (Number(driverAge) === 18) {
	alert("Congratulations on your first year of driving "+userName+"!");
}else if (Number(driverAge) > 18 && Number(driverAge) < 29) {
	alert("Powering On " +userName+". Enjoy the ride!");
}else if (Number(driverAge) > 30) {
	alert("Whoa " +userName+"... \n Are you sure you want to be driving around in your aged and frail condition??");
}
}