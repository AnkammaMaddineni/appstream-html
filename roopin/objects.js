//practice session
/// objects declaration

var student = {
  id: 154,
  name: 'roopin',
  age: 25
}

console.log(student.age);
student.university = "NWMU";
console.log(student.university); // dot notation

// bracket notation
console.log(student['name']);

// constructor function

function Student(id, name, gender) {
  this.id = id;
  this.name = name;
  this.gender = gender;

}
    
var student3 = new Student(153, 'rupin', 'male');
console.log(student3);
var student4 = new Student(134, 'kavya', 'female');
console.log(student4);

// getFullNamme

function Professor(id, fname, lname, gender) {
  this.id = id;
  this.fname = fname;
  this.lname = lname;
  this.gender = gender;
  this.getFullName = function() {
    return this.fname + " " + this.lname;
  } 

}
    
var student5 = new Professor(153, 'rupin', 'vipparthi', 'male');
var student6 = new Professor(155, 'pooja', 'thaladi', 'female');
console.log(student5);
console.log(student6);

// inheritence


function Manager(id, fname, lname, gender) {
  this.id = id;
  this.fname = fname;
  this.lname = lname;
  this.gender = gender;
}
  Manager.prototype.getFullName = function() {
    return this.fname + " " + this.lname;
  } 


    
var student7 = new Manager(143, 'rocks', 'vp', 'male');
var student8 = new Manager(144, 'sagar', 'bhai', 'male');
console.log(student7);
console.log(student8);


