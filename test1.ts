var message:string = "Hello World" 
var x="hello"
var num:number=10
console.log(message)
console.log(typeof num)

var num2 = "2";    // data type inferred as  number 
console.log("value of num "+num2); 
//num2 = "12";
console.log(num2);
//////////////////////////////////////////////////////////////
var global_num = 12;              //global variable 
var Numbers = (function () {
   function Numbers() {
      this.num_val = 13;          //class variable 
   }
   Numbers.prototype.storeNum = function () {
      var local_num = 14;        //local variable 
   };
   Numbers.sval = 10;   
            //static field 
   return Numbers;
}());

console.log("Global num: " + global_num);
console.log(Numbers.sval+"static");       //static variable  

var obj = new Numbers();
console.log("Global num: " + obj.num_val);
var xx=function(){
    console.log("hello ");
}
xx();

function fac(number){

    if(number<=0){
        return 1;
    }
    else{
return (fac(number-1)*number);


    }
}

console.log(factorial(6));
var arro=( a:number,b:number)=>{
return a*b;

}

console.log(arro(4,5));






function factorial(number) {
    if (number <= 0) {         // termination case
       return 1; 
    } else {     
       return (number * factorial(number - 1));     // function invokes itself
    } 
 }; 
 console.log(factorial(6));

