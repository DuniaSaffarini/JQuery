"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        //this.x=x;
        //this.y=y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.getx = function () {
        // this.x=9;
        return this.x;
    };
    Point.prototype.setX = function (val) {
        if (val < 0) {
            console.log("cant accept neg value ");
        }
        else {
            this.x = val;
        }
    };
    Point.prototype.draw = function () {
        console.log('kkk' + this.x + this.y);
    };
    ;
    Point.prototype.getd = function (x) {
        //   console.log('kkk'+this.y);
    };
    return Point;
}());
exports.Point = Point;
//var po2 =new Point();
var po = new Point(8, 5);
/*po.y=8;
po.x=5;*/
//po.draw();
//po.setX(10);
//let Ans = po.getx() ;
//console.log(Ans);
//po2.v;
// po.getd(x)
