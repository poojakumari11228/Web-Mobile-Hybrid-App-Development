//-------------------   Assignment # 6 --------------------
// Chapter 21 - 25 

// Task 1 
var firstName, lastName, fullName; 
firstName= prompt("Enter your first name: "); 
lastName= prompt("Enter your last name: "); 
fullName= firstName + " " + lastName; 
document.write("Hello " + fullName); 
document.write('<br>');

// Task 2  
var x,l;
x= prompt("Enter your favourite cell phone model: ");  
l= x.length; 
document.write("My favourite phone is: " + x); 
document.write('<br>'); 
document.write("Length of String: " + l); 
document.write('<br>');


// Task 3 
var str, ind;
str = "Pakistani"; 
ind =  str.indexOf('n');
document.write("String: " + str); 
document.write('<br>');
document.write("Index of 'n': " + ind); 
document.write('<br>');


// Task 4 
var str, lastind;
str = "Hello World"; 
lastind =  str.lastIndexOf('l');
document.write("String: " + str); 
document.write('<br>'); 
document.write("Last index of 'l': " + lastind); 
document.write('<br>'); 


// Task 5  
var str, character;
str = "Pakistani"; 
character =  str.charAt(3);
document.write("String: " + str); 
document.write('<br>'); 
document.write("Character at index 3: " + character); 
document.write('<br>'); 


// Task 6  
var firstName, lastName, name, fullName; 
firstName= prompt("Enter your first name: "); 
lastName= prompt("Enter your last name: "); 
name= firstName.concat(" "); 
fullName = name.concat(lastName); 
document.write('<br>');  
document.write("Hello " + fullName); 
document.write('<br>');   


// Task 7 
var city, replaced_city;
city = "Hyderabad"; 
replaced_city =  city.replace("Hyder", "Islam");
document.write("City: " + city); 
document.write('<br>'); 
document.write("After replacement: " + replaced_city); 
document.write('<br>'); 


// Task 8 
var message, replaced_message;
message = "Ali and Sami are bestfriends. They play cricket and football together. "; 
replaced_message =  message.replace(/and/g, "&");
document.write("Message: " + message); 
document.write('<br>'); 
document.write("After replacement: " + replaced_message); 
document.write('<br>'); 


// Task 9 
var str, num;
str = "472"; 
num = parseInt(str); 
document.write("Value: " + str); 
document.write('<br>'); 
document.write("Type: " + typeof str); 
document.write('<br>'); 
document.write("Value: " + num); 
document.write('<br>'); 
document.write("Type: " + typeof num); 
document.write('<br>');  


// Task 10
var userinput = window.prompt("Enter your input: ");
var userinputuc = userinput.toUpperCase(); 
document.write("User input: " + userinput + "<br/>" + "Upper case: " + userinputuc);


// Task 11
var userinput2 = window.prompt("Enter your input: ");
var userinput2lcsplit = userinput2.toLowerCase().split(" ");
for (var i = 0; i < userinput2lcsplit.length; i++) {
userinput2lcsplit[i] = userinput2lcsplit[i][0].toUpperCase() + userinput2lcsplit[i].slice(1);
}
var userinput2tc = userinput2lcsplit.join(" ");
document.write("User input: " + userinput2 + "<br/>" + "Title case: " + userinput2tc);


// Task 12
var num = 35.36;
var str = num.toString();
var indexstr = str.indexOf(".");
var newstr = str.slice(0, indexstr) + str.slice(indexstr + 1);
document.write(newstr);


// Task 13
var username = window.prompt("Enter username: ");
if (username.indexOf("@") != -1 || username.indexOf(".") != -1 || username.indexOf(",") != -1 || username.indexOf("!") != -1) {
alert("Enter valid username!"); 
}


// Task 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchitem = window.prompt("Enter the item to search: ");
var check = false;
var pos;
arr.forEach(myFunction);
function myFunction(value, index) {
    if (value.toLowerCase() == searchitem.toLowerCase()) {
        check = true;
        pos = index;
    }
}
if (check) {
    alert(searchitem.toLowerCase() + "is available at index " + pos + " in our bakery.");
}
else {
    alert("We are sorry, " + searchitem.toLowerCase() + " is not available in our bakery.");
}


// Task 15 
var password, letters, numbers; 
password= prompt("Enter password: "); 
length = password.length; 
document.write("Entered password: " + password); 
document.write('<br>'); 
letters = /^[A-Za-z0-9]+$/; 
numbers = /^[0-9]+$/; 
if(!password.match(letters)){
document.write("Password should only contain numbers and alphabets. "); 
document.write('<br>'); 
document.write("Please enter a valid password. "); 
document.write('<br>'); 
} 
else if (password.startsWith(i)) { 
document.write("Password can not begin with a number. "); 
document.write('<br>'); 
document.write("Please enter a valid password. "); 
document.write('<br>'); 
} 
else if (length > 6 ) { 
document.write("Password can not be more than 6 characters long. "); 
document.write('<br>'); 
document.write("Please enter a valid password. "); 
document.write('<br>'); 
} 


// Task 16
var name = "University of Karachi";
var namearr = name.split("");
namearr.forEach(myFunction2);
function myFunction2(value) {
    document.write(value + "</br>");
}


// Task 17
var userinput3 = window.prompt("Enter your input: ");
document.write("User input: " + userinput3 + "<br/>" + "Last character of input: " + userinput3.slice(-1)); 


// Task 18
var sentence = "The quick brown fox jumps over the lazy dog";
var occurence = "the";
var count = 0;
var sentencearr = sentence.split(" ");
sentencearr.forEach(checkSentence);
function checkSentence(value) {
    if (value.toLowerCase() == occurence.toLowerCase()) {
        count = count + 1;
    }
}
document.write("There are " + count + " occurence(s) of word '" + occurence + "'"); 

//-----------------------------******************************************------------------------------------------------
// CHAPTER# 26-30

// Task 1
var num = Number(prompt("Enter a number"));

if(num >= 0){
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);

    document.write("The Entered Number is: " + num);
    document.write('<br>'); 
    document.write("The Rounded Value is: " + round);
    document.write('<br>'); 
    document.write("The Floor Value is: " + floor);
    document.write('<br>'); 
    document.write("The Ceil Value is: " + ceil);
}

else{
    alert("Please Enter a Positive Number");
}

// Task 2
var num = Number(prompt("Enter a number"));

if(num < 0){
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);

    document.write("The Entered Number is: " + num);
    document.write('<br>'); 
    document.write("The Rounded Value is: " + round);
    document.write('<br>'); 
    document.write("The Floor Value is: " + floor);
    document.write('<br>'); 
    document.write("The Ceil Value is: " + ceil);
}

else{
    alert("Please Enter a Negative Number");
}

//Task 3
var absValue = Number(prompt("Enter a Number to find its Absolute"));
var abs = Math.abs(absValue);
document.write("The absolute value of " + absValue + " is " + abs);

//Task 4
var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice);

//Task 5
var dice = Math.floor(Math.random() * 2) + 1;

if(dice == 2){
    document.write(dice);   
    document.write("<br>");
    document.write("random coin value: Heads");
} 

if(dice == 1){
    document.write(dice);   
    document.write("<br>");
    document.write("random coin value: Tails");
}

// Task 6
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("random number between 1 and 100: " + randomNumber);

//Task 7
var weightInput = prompt("Enter weight");
var alphabets = /[a-z]/g; 
var result = weightInput.replace(alphabets, "");
document.write("The weight of user is " + result + " kilograms");

//Task 8
var randomNum = Math.floor(Math.random() * 10) + 1;
var userInput = Number(prompt("Enter a number between 1 and 10"));
if(userInput == randomNum){
    alert("Congratulations! You guessed it right.");
}
else{
    alert("Try Again!");
}

// ------------------- Chapter # 31 , 32, 33, 34 (Date Methods) ----------

//Task # 1
var today = new Date();
document.write("<h3>Current Date & Time:</h3>"+today);

// Task # 2
var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

var curr_month = month[today.getMonth()];
document.write("<br><br><strong>Current Month: "+curr_month+" </strong>");


// Task # 3
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var curr_day = weekday[today.getDay()];
document.write("<br><br><strong>Today Is: "+curr_day+" </strong>");

// Task # 4
if(curr_day == "Sat" || curr_day=="Sun"){
    document.write("<h3>IT'S FUN DAY :)</h3>");
}
else{
    document.write("<h3>NO FUN DAY :(</h3>");  
}

//Task # 5
var curr_date = today.getDate();
if(curr_date < 16){
    document.write("<h3>First Fifteen Days Of Month!</h3>");   
}
else{
    document.write("<h3>Last Days of the Month!</h3>");   
}

// Task # 6

var curr_time = today.getTime();

var old_date = new Date(1970, 1, 1);
var old_time = old_date.getTime();

var elapsed_miliseconds = curr_time - old_time;
var elapsed_minutes = ((curr_time - old_time)/1000)/60;

document.write("<strong>Current Date:</strong>"+today);
document.write("<br><strong>Elapsed Miliseconds Since January 1, 1970: </strong>"+elapsed_miliseconds);
document.write("<br><strong>Elapsed Minutes Since January 1, 1970: </strong>"+elapsed_minutes);


// Task # 7
var curr_hour = today.getHours();
var ampm = (curr_hour >= 12) ? "PM" : "AM";

document.write("<br><br><strong>It's "+ampm+" </strong><br><br>");  


// TASK # 8

// Setting day parameter to 0 means one day less than first day of the month which is last day of the previous month.
var laterDate = new Date(2020, 12, 0);
document.write("later Date: "+laterDate+"<br><br> ");


// TASK # 9
var ramadanDate = new Date(2015, 5, 18);
var current = new Date();
var daysPassed = Math.ceil((current.getTime() - ramadanDate + 1) / 86400000);
document.write(daysPassed+" days have passed since 1st Ramadan, 2015<br><br>");

// TASK # 10
var beginning2015 = new Date(2015, 0, 1);
var refDate = new Date(2015,11,5);
 var secsPassed = Math.ceil((refDate - beginning2015 + 1) / 1000);
document.write("On Reference date"+refDate+","+secsPassed+" seconds have passed since beginning of 2015<br><br>");
// TASK # 11

var currentDate = new Date();
// var today = new Date();
var date = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate();
var time = (currentDate.getHours()-1)+ ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
var dateTime = date+' '+time;

document.write("current date: "+currentDate+" 1 hour age it was "+date+" "+time+"<br><br> ");

// TASK # 12


var myDate = new Date();
var backDate = new Date((2020-100),5,21);
alert("current date "+myDate+" 100 years back it was "+backDate);

// TASK # 13
var d = new Date();
var age = prompt("Enter your age");
var birthyYear = d.getFullYear()-age;
document.write("Your age is : "+age+", <br> Your birthyear is : "+birthyYear+"<br><br> ");

// TASK # 14
var units=410;
var chargesperunit =16;
var lateChrges = 350;
document.write(" <h1>K-Electric Bill</h1> <br> ");
document.write("Customer name: Tom <br> ");
document.write("Month: February <br> ");
document.write("No of units: "+units+" <br> Charges per unit "+chargesperunit+"<br><br>");
var netAmount = units*chargesperunit;
var grossAmount = netAmount+lateChrges;

document.write("Net Amount Payable(within due date): "+netAmount+"<br>");
document.write("late payment surcharges: "+lateChrges+"<br>");
document.write("Gross amount Payable(after due date): "+grossAmount+"<br>");



//-----------------------------******************************************------------------------------------------------
// Chapter 35-38
// TASK 1

function CurrentTime(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    document.write(now + hour + min);
}
CurrentTime();

// TASK 2

function greetings(first_name,last_name){
 document.write("WELCOME " + first_name +" "+ last_name +"!" );
}
var first_name = prompt("Enter First Name");
var last_name = prompt("Enter Last Name");
greetings(first_name,last_name);

// TASK 3

function sum(num1, num2){
    document.write(num1+num2);
}
var num1 = parseInt(prompt("Enter First Number."));
var num2 = parseInt(prompt("Enter Second Number."));
sum(num1,num2);

// TASK 4

function calculator(num1, num2, opr){
   switch (opr){
       case "+":
           document.write("Addition of the numbers are: "+(num1+num2));
           break
        case "-":
            document.write("Subraction of the numbers are: "+ (num1-num2));
            break
        case "*":
            document.write("Multiplication of the numbers are: "+ (num1*num2));
            break
        case "/":
            document.write("Division of the numbers are: "+ (num1/num2));
            break
        default:
            document.write("Invalid Operation: ")

   }

}
var num1 = parseInt(prompt("Enter First Number: "));
var num2 = parseInt(prompt("Enter Second Number: "));
var opr = prompt("Enter Operator (+, -, *, /) ");
 calculator(num1,num2,opr);

// TASK 5

function Square(num){
    document.write(Math.pow(num,2));
}
var num = parseInt(prompt("Enter Number to Sqare: "));
Square(num);

// TASK 6

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = parseInt(prompt("Enter Number to Calculate Factorial:"));
  answer = factorial(n);
  document.write(answer);

// TASK 7

function counter(num1, num2){
    for (var i= num1; i<=num2; i++){
        document.write(i +"<br>");
    }
}
var num1 = parseInt(prompt("Enter Starting Counter"));
var num2 = parseInt(prompt("Enter Ending Counter"));
counter(num1,num2);

//task 8
function calculateHypotenus(base, perpendicular)
{
var b= calculateSquare(base);
var p=calculateSquare(perpendicular);
var hyp=b+p;
    document.write("<br>hyp is= "+Math.sqrt(hyp));

    //inner function = calculateSquare()
    function calculateSquare(num)
    {
    return num*num;
    }
}
calculateHypotenus(2,2);



//task 9
// ............................
//as values

function rectangle_values(width, height)
{
 return width*height;
}
document.write("<br> the area of rectangle is= " +rectangle_values(2,2));
//..............................

//as variables

function rectangle_variables(width, height)
{
 return width*height;
}
var width=2;
var height=2;
document.write("<br> the area of rectangle is= " +rectangle_variables(width, height));



//task 10
function palindrome(){
var word="mom";
var check="";
for (var i=word.length-1 ;i>=0;i--)
{
    check+= word[i];
}
if(check===word)
    document.write("<br>PALINDROME");
else

    document.write("<br> not a PALINDROME");
}
palindrome();

//task 11
function fix (sentence)
{
    var a=sentence.split(" ");
    for(var i=0;i<a.length;i++);
    {
    var b=a[i].charAt(0).toUpperCase();
    document.write( a[i].replace(a[i][0],b)+" " );
    }
}
fix("the quick brown fox");



//task 12
function large_word (sentence)
{

    var a=sentence.split(" ");
    //web development tutorial
    var lens=[];
    var max=0;
    //converting every word to numbers(total number of characters)
    for(var i=0;i<a.length;i++)
    {
        lens[i]=a[i].length;
    }

    //then getting the largest number's index
    var largest=0;
    for(var i=0;i<=largest;i++)
    {
        if(lens>largest)
        var largest=i;
    }
    document.write("<br>"+a[i]+ " is the largest");
    
}
large_word("web development tutorial");


//task 13
function occurence(name, letter)
{
    var count=0;
    for(var i=0;i<name.length;i++)
    {
        if(name[i]===letter)
        count++;
    }
    document.write("<br>"+count + " times ");
}
occurence("JResourceS.com","o");

//task 14
function calcCircumference(radius)
{
    return 2*3.14*radius;
    }
var circum=calcCircumference(3);
document.write("Circumference is= "+ circum);

function calcArea(radius)
{
    return 3.14*radius*radius;
    }
var area=calcArea(3);
document.write("<br>area is= "+ area);


//-----------------------------******************************************------------------------------------------------
