function robot(message1,message2){
    console.log('Hello'+ ' '+ this.fname+ ' '+this. lname+ ' '+  message1+' '+ message2);
}

var person ={
    fname:'bhavika',
    lname:'chilamkurthy'

}


///using call

//robot.call(person,"how are you?","how may i help you?");

//using apply

//robot.apply(person,["how are you?","how may i help you"]);

//using bind

var fun = robot.bind(person,"how are you?????","how may i help you?");
fun();



