var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('kkk' + this.x + this.y);
    };
    ;
    Point.prototype.getd = function (x) {
        //   console.log('kkk'+this.y);
    };
    return Point;
}());
var po = new Point(8, 5);
/*po.y=8;
po.x=5;*/
po.draw();
// po.getd(x)
