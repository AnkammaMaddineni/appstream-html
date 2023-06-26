

// Declaring objects in JS

// Creating an object using object Literal  .

var  employee ={

    name : 'Sai',
    age  :27,
    company : 'Tcs',
    id  : 1289,
    
    }
    // How do we read objects
    
    console.log(employee.name)
    employee.location="Charlotte";
console.log(employee.location)


//  I know that i have alraedy craeted the object and given properties .

// But still if i want to add or assign some other property in the middle  i can assign

// While reading a any properties assigined to an object we have  2 ways of reading.



// 1) dot notation

console.log(employee.age);

// 2) bracket notation   instead of .dot we put bracket
var state = 'company'   // This is an varaible declaring  Important to know  
console.log(employee[state]);


// We use bracket notation when we want to access a property which is dynamic.

 

//@@$$$***** Second way of creating object
//**$$ Construcor function
// when we want  create a function 

// function student(){}  // the student is function name. The first letter of the CONSTRUCTOR function name  should be CAPTITAL LETTER.


function Employee(id,fname,lname,company,age){

    this.id =id;
    this.fname = fname;
    this.lname = lname;
    this.company =company;
    this.age=age;
    this.getFullName =function(){
return this.fname+' '+this.lname;

    }
}
    
    // we create an instance of class or function then only it will get run
    
    var Employee1 = new Employee(189,'Pradeep','Mummaneni','TCS',25);
    console.log(Employee1);
    var Employee2 = new Employee(198,'Sai','Jai','HCL',27);
    console.log(Employee2);
    var Employee3 = new Employee(161,'Ram','Lal','Infosys',23);
    console.log(Employee3);

    // Concept Inheritance 
    //@#$ In java script we have Inheritance , we have object based inheritance.
    //$$#@@ object will inheritance through Prtotype



    //Prtotype

    function Employee(id,fname,lname,company,age){

    this.id =id;
    this.fname = fname;
    this.lname = lname;
    this.company =company;
    this.age=age;
    
    }

    Employee.prototype.country ='INDIA';
    Employee.prototype.getFullName =function(){
        return this.fname+' '+this.lname;
        
            }
   
    
    // we create an instance of class or function then only it will get run
    
    var Employee1 = new Employee(189,'Pradeep','Mummaneni','TCS',25);
    console.log(Employee1);
    var Employee2 = new Employee(198,'Sai','Jai','HCL',27);
    console.log(Employee2);
    console.log(Employee1.getFullName());
    console.log(Employee1);



    // Any Parent we create  every object is  called Object
// Difference between Class based inhertance and Prototype inheritance

