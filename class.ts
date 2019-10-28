class Point{
     x:number;
      y:number;
      private v:any;

constructor(x?:number,  y?:number){
this.x=x;
this.y=y;
  
    }
    draw(){
        console.log('kkk'+this.x+this.y);
    };
     getd(x:Point){
 //   console.log('kkk'+this.y);

    }

    }
var po2 =new Point();
 let po =new Point(8,5);
 /*po.y=8;
 po.x=5;*/
 po.draw();
 //po2.v;
// po.getd(x)