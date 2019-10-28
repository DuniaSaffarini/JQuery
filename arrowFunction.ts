{
   var ex  =function( msg ){
console.log(msg);
}

var ex2  =function( x,y){
    return (x*y) as any;
    }

}
console.log(ex2(5,4));
var ex3  =( x,y)=>{
    return (x*y) as any;
    }


console.log(ex3(5,6));
var d=()=>console.log('hello');
d();
var dx=mss=>console.log(mss);

dx('mss here');
