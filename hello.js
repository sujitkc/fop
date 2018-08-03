/*
alert("Hello");

var hello_var = "Hello class!";

var a = prompt("enter a value: ");

var b = prompt("enter another value: ");

var name = prompt("Enter your name");
var institute = prompt("Enter your institute");

alert(name + " works with " + institute + ".");
alert(numx + numy);


var x = prompt("Enter a number");
var y = prompt("Enter another number");

numx = Number(x);
numy = Number(y);

for(var i = 0; i < 10; i++) {
  console.log("Hello world!");
  console.log("numx = " + numx);
}

*/
/*
Above for loop is equivalent to:
var i = 0;
while(i < 10) {
  console.log("Hello world!");
  console.log("numx = " + numx);
  i++;
}

*/
/*
while(numx < numy) {
  console.log("numx = " + numx);
//  numx++;
}
*/

var student_names = [
    { fname : "Sujit", mname : "K", lname : "Chakr"},
    { fname : "Suji", mname : "ar", lname : "Chakrab"},
    { fname : "Suj", mname : "Kr", lname : "Cha"},
    { fname : "Su", mname : "Kur", lname : "Chak"},
    { fname : "S", mname : "Kuar", lname : "Cha"},
    { fname : "jit", mname : "umar", lname : "C"}
  ];
/*
for(var i = 0; i < student_names.length; i++) {
  console.log("Student name = " + student_names[i]);
}
*/
var name;
for(name in student_names) {
  console.log("Student name = " + student_names[name].fname + " " + student_names[name].mname + " " + student_names[name].lname);
}


function add(x, y) {
  return x + y;
}

function calculation(numbers) {
  var tot = 0
  for(i in numbers) {
    tot = add(tot, numbers[i]);
  }

//  console.log(total);
  var av = tot / numbers.length;
//  console.log("Average = " + avg);

  return { total : tot, avg : av };
}

function print_message(msg, n) {
  for(var i = 0; i < n; i+=2) {
    console.log(msg);
  }
}

function array_has_element(a, e) {
  return a[e] != undefined;
}

function count_chars(s) {
  var count = [];
  for(i in s) {
    if(array_has_element(count,s[i])) {
      count[s[i]]++
    }
    else {
      count[s[i]] = 1;
    }
  }
  return count;
}


function Person(fn, mn, ln) {
  this.fname = fn;
  this.mname = mn;
  this.lname = ln;
  this.full_name = function() {
    return this.fname + " " + this.mname + " " + this.lname;
  }
};















var numbers = [1, 2, 3, 4, 5];
var numbers2 = [12, 311, 34, 65];
var numbers3 = [12, 311, 34, 65];
var numbers4 = [12, 311, 34, 65];
var numbers5 = [12, 311, 34, 65];
var numbers6 = [12, 311, 34, 65];
var numbers7 = [12, 311, 34, 65];

var num_array = [ numbers, numbers2, numbers3, numbers4, numbers5, numbers6, numbers7];

function output(a) {
  var result = calculation(a);
  console.log("total = " + result.total);
  console.log("average = " + result.avg);
  return result;
}

num_array.map(output, num_array);