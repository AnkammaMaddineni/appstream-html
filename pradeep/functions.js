
// function

  function num(){
    var A =10;
    var B=20;
    return A+B;
    }
    var val =num();
    console.log(val);


// Substraction
 function sub(){
    var p =10;
    var r =20;
    return p-r;
 }
    var val =sub();
    console.log(val);
 

 //multiplication

  function mul(){
    var b =25;
    var c =35;
    return b*c;
 }
    var val =mul();
    console.log(val);

    // Divison
    function div(){
        var b=10;
        var c=2;
        return b/c;
    }
    var val =div();
    console.log(val);


    // percentage

    function percentage(num,per) {
    
    return (num/100)*per;
    }
    console.log(percentage(1000,25));




//functions inside function for Divison
 var a =myFunction(25,35);
 function myFunction(c,b){
    return c/b;
 }
     console.log(a);


     // Functions inside function
  
  var x =myFunction(10,25);
    
    function myFunction(k,p){
      return k+p;
    
    }
      console.log(x);





      // Closure :   Functions inside function



      function greetings(name) {
         console.log('Hello, ' + name + '!');
       }
       
       // Calling the greetings function

       greetings('Sai');


       //  MAth

       function sum(a,b){
         return a+b;
         sum(1+2);
         console.log(sum());
         
       }
       

       // function expression

       var mySum = function  sum(a,b){
return a-b;
       };
       console.log(mySum(10-20));  // output -10



       /// Variable  Hoisting  in java script

       var x =20;
       var y=10;
       var z =x+y;
       console.log(z);  // 

       // the below is hoisting

       console.log(z); 
       var x =20;
       var y=10;
       var z =x+y;


       // This is function hoisting

       function greet(){
       console.log("hello");
       }
       greet();



        greet ();   // calling here 
       function greet(){
         console.log("hello");
       }


       // This is function expression hoisting
       var sweet =function (){
         console.log("ram!");
   
       };

       sweet();


       sweet();
       var sweeet =function (){
         console.log("ram!");
       };



