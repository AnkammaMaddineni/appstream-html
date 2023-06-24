//function multiply(a, b) {
  //  return a * b;
 // }

  //var c = multiply(10,20);
  //console.log(c);
//console.log(multiply(70,20));

////////////// anonamous function//////////////////
var f= function (a,b) {
    return a * b;
}
console.log(f(10,20));



/////////////// CLOSURE FUNCTIONS /////////////////////
//console.log(multiply(70,20));
//console.log(add(1000));// not possible

function multiply(a, b) {
     c = a * b;

    function add(d){
        return e = c+d; 

    }
    console.log(add(1000));
  }
  //console.log(add(1000)); // not possible
