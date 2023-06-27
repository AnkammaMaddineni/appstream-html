// loops

// program to display text 5 times
// for loop 
var n = 5;

for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

// while loop

// program to display numbers from 1 to 5
// initialize the variable
var i = 1;
var k = 5;

while (i <= k) {
    console.log(i);
    i += 1;
}

// do while

// program to display numbers
var i = 8;
var n = 15;

do {
    console.log(i);
    i++;
} while(i < n);

// call,apply, bind

function greeting(message1, message2) {
  console.log('hello'+ ' ' + this.fname + ' ' + this.lname + ' ' + message1 + ' ' + message2);
}

var stu = {
  fname : 'roopin',
  lname : 'vipparthi' 
}

// greeting.call(stu, 'how are you', 'how is your day');

// greeting.apply(stu, ['how are you', 'how is your day']);

var fun = greeting.bind(stu, 'how are you', 'how is your day');
fun();
