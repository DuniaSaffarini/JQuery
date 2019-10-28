 let draw =(point)=>{

    return(point.x+point.y);

 }


 console.log(
     draw(
     {
         x:1,
        y:2   
      }
 ))
/***************** */

interface Point{
x2:number,
y2:number

}

 let draw2 =(point:Point)=>{

    return(point.x2+point.y2);

 }


 /*console.log(
     draw2(
     {
         x2:1,
         y2:2   
      }
 ))
/***** */
