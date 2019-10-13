$(document).ready(function(){
   $('.next').on('click',function () {
       var cimg=$('.active');
       var nimg=cimg.next();
       if(nimg.length){
     cimg.removeClass('active').css('z-Index',-10);
     nimg.addClass('active').css('z-Index',10);


       }
   });
    $('.prev').on('click',function () {
        var cimg=$('.active');
        var nimg=cimg.prev();
        if(nimg.length){
            cimg.removeClass('active').css.zIndex(-10);
            nimg.addClass('active').css.zIndex(10);


        }
    });

});