
 
 /****** let vs var****** */
 function vE(){
 for(var i=0;i<5;i++){

console.log("inside for"+i );

 }

 console.log("outside for"+i );

 }


function LE(){

 for(let j=0;j<5;j++){

    console.log("inside for"+j );
   
}
//console.log("outside for"+j ); Cannot find name 'i'.

}
vE();
LE();

