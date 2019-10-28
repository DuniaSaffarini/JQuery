 export class Point{
     public x1:number;
     public y1:number;
      private v:any;

constructor( private x?:number,  private y?:number){
//this.x=x;
//this.y=y;
  
    }
     public  getx(){
      // this.x=9;
     return this.x;


    }
    public setX(val){
    if (val<0){
    console.log("cant accept neg value ");

    }
    else {
        this.x=val;
    }
    }

    draw(){
        console.log('kkk'+this.x+this.y);
    };
     getd(x:Point){
 //   console.log('kkk'+this.y);

    }

    }
 //var po2 =new Point();
 let po =new Point(8,5);
 /*po.y=8;
 po.x=5;*/
 //po.draw();

 //po.setX(10);
 //let Ans = po.getx() ;
 //console.log(Ans);
 
 //po2.v;
// po.getd(x)