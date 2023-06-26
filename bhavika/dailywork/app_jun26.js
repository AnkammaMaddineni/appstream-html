/// creating employee object as a variable.

var employee= {
    id:108,
    name:'Bhavika',
    age: 26,

}
console.log(employee);
///creating object car as a variable

var car={

    color: 'blue',
    model:'SUV',
    engine:'hybrid',
}
console.log(car);

/// attaching new property to objects

employee.location='Boston';
car.company='Tesla';

///reading object properties through dot and braket notation

console.log('age of employee is',employee.age);
console.log('age of employee is',employee['age']);
console.log('color of car is ',car.color);
console.log('engine of car is',car['engine']);

///creating object using construction function

function Employee(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
}





var employee1= new Employee(100,'Harsha',28);
var employee2= new Employee(200,'john',50);


function Car(color,engine,model)
{
    this.color=color;
    this.engine=engine;
    this.model=model;
    
}


var car1= new Car('red','electric','SUV');
var car2= new Car('white','gas','sedan');


////displaying objects created using construction function

console.log('details of employee2',employee2);
console.log('details of car1',car1);

///reading properties in object

console.log('age of employee1',employee1.age);
console.log('color of car2',car2.color);

///adding property to construction function object
employee1.gender='male';
console.log(employee1);

///inheritance in javascript


Employee.prototype.country ='India';
Employee.prototype.idageproduct= function() {
    return this.id * this.age;
}

console.log(employee1.idageproduct());


Car.prototype.madein ="USA";
console.log(car2);