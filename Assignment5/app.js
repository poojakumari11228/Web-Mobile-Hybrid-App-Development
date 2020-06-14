// ------------------- CHAPTER 1 ---------------------------

//task 1
alert("hello everyone");


//task2
alert("error! please enter a valid password");


//task3
alert("welcome to JS land...\n Happy Coding!");


//task4
alert("welcome to JS land");
alert(" Happy Coding!");

//task5
console.log("hello.. I can run JS thru my web browser's console.");

//Task 6 
document.write('<a href="Project_for_chapter1_task6/index.html">Click here for task 6 on another project </a>');

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// ------------------- CHAPTER 2 ---------------------------


//task1
var username="Pooja";

//task2
var fullName="Pooja Kumari";
var myName=fullName;
alert(myName);


//task3
var message="hello world";
alert(message);


//task4
var name=prompt("name: ");
var age=prompt("age: ");
var skill=prompt("skill: ");
alert(name+ "\n"+ age+ "\n"+ skill); 

//task 5
var pyramid="PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(pyramid);

//task6
var email="poojakumari11228@gmail.com";
alert("my email address is "+email);

//task7
var book=" A smarter way to learn JS";
alert("i am trying to learn from "+ book);

//task8
document.write("YAH! I can write HTML content thru JS");

//task9
alert("----------- ஜ۩۞۩ஜ ------------");


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// ------------------- CHAPTER 3 ---------------------------



//task1 
var age=21;
alert("I AM " +age+ " years old");



//task2 
var loaded = parseInt(localStorage.getItem('loaded'), 10),
         loaded_numb = loaded?loaded+1:1;
     localStorage.setItem('loaded', loaded_numb);
     console.log(loaded_numb);
     alert("You have visited this site "+ loaded_numb+ " times!");

     
//task 3
var birthYear=1998;
document.write("My birth year is "+ birthYear +  "<br> data type of my declared variable is number");

//task4
var name=prompt("your name: ");
var product=prompt("product: ");
var quantity=prompt("quantity: ");
document.write(name.bold()+ " ordered "+quantity.bold() +product.bold()+ "on  XYZ clothing");

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// CHAPTER 4
// TASK 1

var var1, var2, var3;

// TASK 2 legal variables

var name, Num2, rollNo, first_name, $currency;

// TASK 2 illegal variables

// var 1no;
// var first-name;
// var alert; 
// var last name;
// var 5;

// Task 3


document.write("<h2> Rules For Naming JS Variables </h2>"); 
document.write(" Variable names can only contain numbers, $ and _. For example <b> $my_1stVariable </b> ");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>");
document.write(" Variable names are case sensitive <br>");
document.write("Variable names should not be JS keyword <br>");

// CHAPTER#05

// Task 1 
var a,b,c;
a= prompt("Enter first number: "); 
b= prompt("Enter second number: "); 
c= Number(a) + Number(b); 
document.write("Sum of " + a + " and " + b + " is " + c); 


// Task 2 Subtraction 
var a,b,c;
a= prompt("Enter first number: "); 
b= prompt("Enter second number: "); 
c= Number(a) - Number(b); 
document.write("Difference of " + a + " and " + b + " is " + c); 


// Task 2 Multiplication 
var a,b,c;
a= prompt("Enter first number: "); 
b= prompt("Enter second number: "); 
c= Number(a) * Number(b); 
document.write("Product of " + a + " and " + b + " is " + c); 


// Task 2 Division 
var a,b,c;
a= prompt("Enter first number: "); 
b= prompt("Enter second number: "); 
c= Number(a) / Number(b); 
document.write("Division of " + a + " and " + b + " is " + c); 


// Task 2 Modulus 
var a,b,c;
a= prompt("Enter first number: "); 
b= prompt("Enter second number: "); 
c= Number(a) % Number(b); 
document.write("Modulus of " + a + " and " + b + " is " + c); 


// Task 3 
var a; 
document.write("Value after variable declaration is: " + a); 
document.write('<br>'); 
a= 5; 
document.write("Initial value is: " + a);
document.write('<br>');   
a = Number(a) + 1; 
document.write("Value after increment is: " + a); 
document.write('<br>');  
a = Number(a) + 7; 
document.write("Value after addition is: " + a); 
document.write('<br>'); 
a = Number(a) - 1; 
document.write("Value after decrement is: " + a);
document.write('<br>');    
b = Number(a) % 3; 
document.write("The remainder is: " + b); 
document.write('<br>');   



// Task 4 
var price_of_one_ticket, number_of_tickets, total_price; 
price_of_one_ticket = prompt("Enter price of 1 ticket: "); 
number_of_tickets = prompt("Enter the number of tickets to buy: "); 
total_price= Number(price_of_one_ticket) * Number(number_of_tickets); 
document.write("Total cost to buy " + number_of_tickets + " tickets to a movie is  " + total_price + "PKR"); 


// Task 5 
var num = prompt("Enter Number") 
var num = parseInt(num); 
var i = 0;
document.write('Table of ' + num);  
document.write('<br>'); 
for(i=1;i<=10;i++) {
    document.write(num + " x " + i + " = " + num*i ); 
	document.write('<br>'); 
}


// Task 6 
var celcius, fahrenheit;  
celcius = prompt("Enter the temperature in Celcius: "); 
F = (Number(celcius) * 9/5) + 32;  
document.write(celcius + "°C is " + F + "°F ");  
document.write('<br>'); 
fahrenheit = prompt("Enter the temperature in Fahrenheit: "); 
C = (Number(fahrenheit) - 32) * 5/9;  
document.write(fahrenheit + "°F is " + C + "°C ");  


// Task 7 
document.write("<h1> Shopping Cart </h1>");
var price1, price2, quantity1, quantity2, shipping_charges, total_cost;  
price1 = prompt("Enter the price of first item: ");  
quantity1 = prompt("Enter the quantity of first item: "); 
price2 = prompt("Enter the price of second item: ");
quantity2 = prompt("Enter the quantity of second item: "); 
shipping_charges = 150; 
document.write("Price of item 1 is " + price1);
document.write('<br>'); 
document.write("Quantity of item 1 is " + quantity1);
document.write('<br>'); 
document.write("Price of item 2 is " + price2);
document.write('<br>'); 
document.write("Quantity of item 2 is " + quantity2);
document.write('<br>'); 
document.write("Shipping Charges " + shipping_charges);
document.write('<br>');  
document.write('<br>'); 
total_cost = Number(price1)*Number(quantity1) + Number(price2)*Number(quantity2) + Number(shipping_charges); 
document.write("Total Cost of your order is  " + total_cost); 


// Task 8 
document.write("<h1> Mark Sheet </h1>");
var total_marks, marks_obtained, percentage;  
total_marks = prompt("Enter total marks: "); 
marks_obtained = prompt("Enter the marks obtained: ");
percentage = (Number(marks_obtained)/Number(total_marks)) * 100; 
document.write("Total Marks: " + total_marks);
document.write('<br>'); 
document.write("Marks obtained: " + marks_obtained);
document.write('<br>'); 
document.write("Percentage: " + percentage + "%"); 


// Task 9 
document.write("<h1> Currency in PKR </h1>");
var dollars, riyals, rupees;  
dollars = prompt("Enter the amount in dollars: "); 
riyals = prompt("Enter the amount in riyals: "); 
rupees = Number(dollars)*104.80 + Number(riyals)*28;  
document.write("Total Currency in PKR: " + rupees);


// Task 10 
var x;  
x = prompt("Enter the number: ");
x = ((Number(x)+5)*10)/2; 
document.write(x);  


// Task 11 
document.write("<h1> Age Calculator </h1>");
var current_year, birth_year, age1, age2;  
current_year = prompt("Enter current year: ");  
birth_year = prompt("Enter birth year: "); 
age1 = Number(current_year) - Number(birth_year);   
age2 = Number(age1) - 1; 
document.write("Current Year: " + current_year);
document.write('<br>'); 
document.write("Birth Year: " + birth_year);
document.write('<br>'); 
document.write("They are either " + age1 + " or " + age2 + " years old " );


// Task 12 
document.write("<h1> The Geometrizer </h1>");
var radius, circumference, area, pie;  
radius = prompt("Enter the radius of the circle: ");
pie = 3.142; 
circumference = 2*Number(pie)*Number(radius); 
area = Number(pie)*Number(radius)**2;   
document.write("The radius of circle is: " + radius);
document.write('<br>'); 
document.write("The circumference is : " + circumference);
document.write('<br>'); 
document.write("The area is: " + area); 


// Task 13 
document.write("<h1> The Lifetime Supply Calculator </h1>");
var fav_snack, current_age, max_age, amount_per_day, lifetime;  
fav_snack = prompt("Enter your favourite snack: "); 
current_age = prompt("Enter your current age: ");
max_age = prompt("Enter maximum estimated age: ");
amount_per_day = prompt("Enter the estimated amount per day: ");
lifetime = (Number(max_age) - Number(current_age)) * 3;  
document.write("Favourite Snack : " + fav_snack);
document.write('<br>'); 
document.write("Current Age : " + current_age);
document.write('<br>'); 
document.write("Estimated Maximum Age : " + max_age);
document.write('<br>'); 
document.write("Amount of snacks per day : " + amount_per_day);
document.write('<br>'); 
document.write("You'll need " + lifetime + " " + fav_snack + " to last you until the ripe old age of " + max_age);

// --------------------------------********************************-------------------------------------------


// CHAPTER 6-9
// TASK 1


var x = prompt("Enter any Number");
document.write("<br> Result <br> The value of a is:" + x);
document.write("<br>The value of ++x is:" + ++x + "<br> now the value of x is:" + x);
document.write("<br>The value of x++ is:" + x++ + "<br> now the value of x is:" + x);
document.write("<br>The value of --x is:" + --x + "<br> now the value of x is:" + x);
document.write("<br>The value of x-- is:" + x-- + "<br> now the value of x is:" + x);



// TASK 2


var a = 5, b = 10;
document.write("<br> <br> <br> a = " +a + "<br> b = "+ b);
var step1 = --a;
var step2 = step1 - --b;
var step3 = step2 + ++b;
var step_final =step3 + b--;
document.write("<br> Result: "+ step_final);
document.write("<br> <h3> Explaination </h3> <br> --a = " + step1
+ "<br> --a - --b = " + step2
+ "<br> --a - --b + ++b = " + step3
+ "<br> --a - --b + ++b + b-- = " + step_final);


// TASk 3

var name = prompt("Enter Name");
document.write("<br> <br> WELCOME "+ name + "!");


// TASK 5

y = prompt("Enter any Number.");
y = y || 5;
for( var i = 1; i<11; i++){
    document.write(y + " * " +i+ " = " + y*i +"<br>");
}

// TASK 6 
var subject1 = prompt("Enter Subject Name 1: ");
var subject2 = prompt("Enter Subject Name 2: ");
var subject3 = prompt("Enter Subject Name 3: ");
var score1 = prompt("Enter Subject 1 Score");
var score2 = prompt("Enter Subject 2 Score");
var score3 = prompt("Enter Subject 3 Score");
var total = 100;
var per1 = (score1/total) *100;
var per2 = (score2/total)*100;
var per3 = (score3/total) *100;
document.getElementById("sub1").innerHTML= subject1;
document.getElementById("sub2").innerHTML= subject2;
document.getElementById("sub3").innerHTML= subject3;
document.getElementById("obt1").innerHTML= score1;
document.getElementById("obt2").innerHTML= score2;
document.getElementById("obt3").innerHTML= score3;
document.getElementById("per1").innerHTML= per1 +"%";
document.getElementById("per2").innerHTML= per2 +"%";
document.getElementById("per3").innerHTML= per3 +"%";
document.getElementsByClassName("total1").innerHTML= total;
document.getElementsByClassName("total2").innerHTML= total;
document.getElementsByClassName("total3").innerHTML= total;


//CHAPTER# 09, 10, 11

//Task 1


var city = window.prompt("Enter the name of the city: ");

var citylc = city.toLowerCase();

if (citylc == "karachi") {
    alert("Welcome to the city of lights!");

}
else {
    alert("Welcome to " + city + "!");
}

//Task 2


var gender = window.prompt("Enter your gender (male/female): ");

var genderlc = gender.toLowerCase();

if (genderlc == "male") {

    alert("Good Morning Sir!");

}

else if (genderlc == "female") {
    alert("Good Morning Ma'am!");
}
else {
    alert("Please enter either male or female!");
}

//Task 3


var color = window.prompt("Enter the color of the traffic signal (red/yellow/green): ");

var colorlc = color.toLowerCase();

if (colorlc == "red") {
    alert("Must stop!");

}
else if (colorlc == "yellow") {
    alert("Ready to move!");
}
else if (colorlc == "green") {
    alert("Move now!");
}
else {
    alert("Please enter the correct color!");
}

//Task 4

var ltr = window.prompt("Enter the remaining fuel (in litres): ");

var ltrf = parseFloat(ltr);

if (ltrf < 0.25) {
    alert("Please refill the fuel in your car!");

}

else {
    alert("You are good to go!");
}

// Task 5

//a

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//b

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}


//c

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

//d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


//e

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}


//f

if ("car" < "cat") {
    alert("car is smaller than cat");
}


// Task 6

var marksobt = window.prompt("Enter your obtained marks in all three subjects: ");
var marksttl = window.prompt("Enter total marks: ");

var marksobti = parseInt(marksobt);
var marksttli = parseInt(marksttl);

var pc = (marksobti * 100) / marksttli;

var garde;
var remarks;

if (pc >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (pc >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (pc >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}


alert("Marks Sheet:\n" + "Total marks: " + marksttli + "\nMarks obtained: " + marksobti + "\nPercentage: " + pc + "%" + "\nGrade: " + grade + "\nRemarks: " + remarks);


// Task 7

var guess = window.prompt("Guess a number from 1-10: ");

var guessi = parseInt(guess);

var randomnumber = Math.floor((Math.random() * 10) + 1);

if (randomnumber == guessi) {
    alert("Bingo! Correct answer.");
}

else if (randomnumber == guessi + 1) {
    alert("Close enough to the correct answer.");
}

else {
    alert("Worng answer!");
}


// Task 8

var num = window.prompt("Enter a whole number to check if it is divisible by 3 or not: ");

var numi = parseInt(num);


if (numi % 3 == 0) {
    alert("Number is divisible by 3");
}

else {
    alert("It is not divisible by 3");
}



// Task 9

var num = window.prompt("Enter a whole number to check if it is even or odd: ");

var numi = parseInt(num);

if (numi % 2 == 0) {

    alert("It is an even number.");

}

else {
    alert("It is an odd number.");
}

// Task 10

var temperature = window.prompt("Enter temperature in celsius: ");

var temperaturei = parseInt(temperature);

if (temperaturei > 40) {

    alert("It is too hot outside.");

}

else if (temperaturei > 30) {

    alert("The weather today is normal.");

}

else if (temperaturei > 20) {

    alert("Today's weather is cool.");

}
else if (temperaturei > 10) {

    alert("OMG! Today's weather is so cool.");

}

else {
    alert("It is freezing today.");
}

// Task 11


var num1 = window.prompt("Enter the first number: ");
var num2 = window.prompt("Enter the second number: ");
var op = window.prompt("Enter the operator (+,-,*,/,%): ");




var num1f = parseFloat(num1);
var num2f = parseFloat(num2);


if (op == "+") {

    alert(num1f + num2f);

}

else if (op == "-") {

    alert(num1f - num2f);

}

else if (op == "*") {

    alert(num1f * num2f);

}
else if (op == "/") {

    alert(num1f / num2f);

}

else if (op == "%") {

    alert(num1f % num2f);

}

else {
    alert("Enter correct details!");
}



// --------------------------------********************************-------------------------------------------

//CHAPTER# 12, 13 

// Task 1

var userInput = prompt("Please Enter a Character/Number/String");

if(!isNaN(userInput * 1)){
	alert("Input is a Numeric");
}

else if(userInput == userInput.toUpperCase()){
	alert("Input is Uppercased");
}

else if(userInput == userInput.toLowerCase()){
	alert("Input is Lowercased");
// }


//Task 2

var number1 = parseInt(prompt("Enter First Number"));
var number2 = parseInt(prompt("Enter Second Number"));

if(number1 > number2){
	alert(number1 + " is larger");
}

else if(number2 > number1){
	alert(number2 + " is larger");
}

else{
	alert("Both numbers are equal");
}


//Task 3

var num = parseInt(prompt("Enter a Number"));

if(num < 0){
	alert(num + " is a Negative Number");
}

else if(num == 0){
	alert("It is a Zero");
}
else{
	alert(num + " is a Positive Number");
}


//Task 4

var vowels = ['a', 'e', 'i', 'o', 'u'];
var characterInput = prompt("Enter a Character");
if(characterInput.length == 1){
	if(vowels.includes(characterInput)){
		alert(characterInput + " is a Vowel");
	}

	else{
		alert(characterInput + " is not a Vowel");
	}
}

else{
	alert("Please Enter A Single Character");
}


//Task 5

var password = "Password";
var userPass = prompt("Please Enter your password");

if(userPass == ""){
	alert(" Please enter your password");
}

else{
	if(userPass == password){
		alert("Correct! The password you entered matches the original password");
	}

	else{
		alert("Incorrect password");
	}
}


//Task 6

var greeting; 
var hour = 13; 
if (hour < 18) { 
	greeting = "Good day";
}
	
else {
	greeting = "Good evening"; 
} 

//Task 7
function checkTime(){
	var time = document.getElementById("myTime"). value;
	if(time >= "00:00" && time < "12:00"){
		alert("Good morning!");
	}
	else if(time >= "12:00" && time < "17:00"){
		alert("Good afternoon!");
	}
	else if(time >= "17:00" && time < "21:00"){
		alert("Good evening!");
	}
	else if(time >= "21:00" && time < "23:59"){
		alert("Good night!");
	}
	document.getElementById("timeMessage").innerHTML = time;
}
  
// --------------------------------********************************-------------------------------------------

//CHAPTER# 14, 15, 16

// Task 1
var name_array = [];

// Task 2
var name_obj = {
};

// Task 3
var skills = ["Java", "JavaScript", "Python","Android"];

// Task 4
var students_marks = [20, 30, 40, 50];

// Task 5
var students_passed = [true, false, true, false];

// Task 6
var mixed_arr = [1, 'car', false, 2.5, "laptop"];

// Task # 7
var available_qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PhD" ];
document.write("<h3>CHAPTER 14 - 16: Task 7 <br> Qualifications:</h3>");
for(var i=0; i<available_qualifications.length; i++){
    document.write("<h3>"+ ( i+1) +") "+available_qualifications[i]+"</h3>");
}

// Task 8
var std_names = ["Michael", "John", "Tony"];
var std_scores = [320, 230, 480];
document.write("<br><h3>CHAPTER 14 - 16 :Task 8 <br> Score of "+std_names[0]+" is "+std_scores[0]+". Percentage:"+( (std_scores[0]*100)/500 )+"% </h3>");
document.write("<h3>Score of "+std_names[1]+" is "+std_scores[1]+". Percentage:"+( (std_scores[1]*100)/500 )+"% </h3>");
document.write("<h3>Score of "+std_names[2]+" is "+std_scores[2]+". Percentage:"+( (std_scores[2]*100)/500 )+"% </h3>");

// Task 9
document.write("<br><h3>CHAPTER 14 - 16:Task 9 </h3>");
var colors = ["red", "green","blue","white"];
document.write("Colors : "+colors);

var a = prompt("what color do you want to add to the beginning of array");
colors.unshift(a);
document.write("<br>color "+a+" added to the beginning");
document.write("<br>Colors : "+colors);

var b = prompt("what color do you want to add to the end of array");
colors.push(b);
document.write("<br>color "+b+" added to the end");
document.write("<br>Colors : "+colors);

colors.unshift("purple");
colors.unshift("yellow");
document.write("<br>Two more colors added to the beginning");
document.write("<br>Colors : "+colors);

colors.shift();
document.write("<br>First color deleted");
document.write("<br>Colors : "+colors);

colors.pop();
document.write("<br>Last color deleted");
document.write("<br>Colors : "+colors);

var index = prompt("At what position you want to insert color?");
var newcolor = prompt("Which color you want to add at "+index);
colors.splice(index,0,newcolor);
document.write("<br>color "+newcolor+" added at "+index);
document.write("<br>Colors : "+colors);


var del_index = prompt("At what positioned color you want to remove?");
var del_numbr = prompt("How many colors you want to delete?");
colors.splice(del_index,del_numbr);
document.write("<br>colors deleted ");
document.write("<br>Colors : "+colors);

// Task 10
document.write("<br><h3>CHAPTER 14 - 16:Task 10 </h3>");
var arr_std_scores = [320,230,480,120];
document.write("Scores of students : "+arr_std_scores);
document.write("Ordered Scores of students : "+arr_std_scores.sort());


// Task 11
document.write("<br><h3>CHAPTER 14 - 16: Task 11 </h3>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,4);
document.write("Cities list : <br>"+cities);
document.write("<br>Selected Cities list : <br>"+selectedCities);

// Task 12
document.write("<br><h3>CHAPTER 14 - 16 :Task 12 </h3>");
var arr = ["This","is","my","cat"];
document.write("<br>Array:<br>"+arr);
var myString = arr.join(" ");
document.write("<br>String:<br>"+myString);


// Tas 13
document.write("<br><h3>CHAPTER 14 - 16 :Task 13 </h3>");
var devices=[];
// push at the end
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices: <br>"+devices);
// get from the 1st entry
document.write("<br>out: <br>"+devices.shift());
document.write("<br>out: <br>"+devices.shift());
document.write("<br>out: <br>"+devices.shift());
document.write("<br>out: <br>"+devices.shift());

// Task 14
document.write("<br><h3>CHAPTER 14 - 16 :Task 14 </h3>");
var devices=[];
// push at the end
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices: <br>"+devices);
// get from the last entry
document.write("<br>out: <br>"+devices.pop());
document.write("<br>out: <br>"+devices.pop());
document.write("<br>out: <br>"+devices.pop());
document.write("<br>out: <br>"+devices.pop());

// Task 15
document.write("<br><h3>CHAPTER 14 - 16 :Task 15 </h3>");
var phoneManufacturers = ["Apple", "Samsung","Motorola","Nokia","Sony","Haier"];
document.write("Select Phone Manufacturer : <select><option>"+phoneManufacturers[0]+"<option> <option>"+phoneManufacturers[1]+"<option> <option>"+phoneManufacturers[2]+"<option> <option>"+phoneManufacturers[3]+"<option> <option>"+phoneManufacturers[4]+"<option> <option>"+phoneManufacturers[5]+"<option> </select>");


// --------------------------------********************************-------------------------------------------

//CHAPTER# 17, 18, 19, 20

// Task  1

var threeDArray = Array(3).fill(null).map(() => Array(3).fill(null));
console.log(threeDArray);

// Task  2

var num_array = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
console.log(num_array);

// Task  3

document.write("<h3>Numeric Counting From 1 to 10</h3>");
for (var input = 1; input <= 10; input++) {
    console.log(input);
    document.write(input + "<br>");
}

// Task  4

var multiplication_num = prompt("Enter a number to show its multiplication table");
var multiplication_length = prompt("Enter length of multiplication table");

document.write("<strong><br>Multiplication Table of: </strong>" + multiplication_num);
document.write("<strong><br>Length: </strong>" + multiplication_length + "<br>");

if (multiplication_num != null && multiplication_length != null) {
    for (var a = 1; a <= multiplication_length; a++) {

        console.log(multiplication_num * a);
        document.write("<br>" + multiplication_num + " x " + a + " = " + multiplication_num * a);
    }
}

// Task  5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var len = fruits.length;	//no. of elements of the array

document.write("<h3><br>Fruits Names with index Numbers</h3>");

//print elements of the array with index
for (var i = 0; i < len; i++) {
    console.log(fruits[i]);
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Task  6

// counting
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    console.log(i);
    document.write(i + " , ");
}

// reverse counting
document.write("<h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
    console.log(i);
    document.write(i + " , ");
}

// even numbers
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
        document.write(i + " , ");
    }
}

// odd numbers
document.write("<h3>Odd:</h3>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
        document.write(i + " , ");
    }
}

// series
document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
        document.write(i + "k , ");
    }
}

// Task  7

var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");

document.write("<h3>Welcome to ABC Bakery</h3>");

if (input != null) {
    var result = items.indexOf(input);
    if (result < 0) {
        document.write("We are Sorry. " + input + " is <strong>not available</strong> in our bakery!");
    }
    else {
        document.write(input + " is <strong>available</strong> at index " + result + " in our bakery!");
    }
}

// Task  8

document.write("<h3>Find Largest Number!</h3>");

var num_array = [24, 53, 78, 91, 12];
var largest = num_array[0];

document.write("<strong>Array Items: </strong>");
for (var i = 0; i < num_array.length; i++) {
    console.log(num_array[i]);
    document.write(num_array[i] + ", ")
    if (largest < num_array[i]) {
        largest = num_array[i];
    }
}
console.log(largest);
document.write("<br><strong>The Largest Number is: </strong> " + largest);

// Task  9

document.write("<h3>Find Smallest Number!</h3>");

var smallest= num_array[0];

document.write("<strong>Array Items: </strong>");
for (var i = 0; i < num_array.length; i++) {
    console.log(num_array[i]);
    document.write(num_array[i] + ", ")
    if (smallest > num_array[i]) {
        smallest = num_array[i];
    }
}
console.log(smallest);
document.write("<br><strong>The Smallest Number is: </strong> " + smallest);

// Task  10

document.write("<h3>Multiples of 5, Range from 1 to 100</h3>");
for(a=1 ; a <= 100; a++){
    if(a%5 == 0){
        document.write(a + ", ");
    }
} 

}