(function ($) {
$.fn.shuffleString=function(){


    return this.each(function () {
var str= $(this).text();
        $(this).text( shuffleString(str));// this refer to h2

        function shuffleString(str) {
         //  alert(typeof str);
          //  console.log(str);
            var array=str.split("");
            console.log(array);
            for(var i=array.length-1;i>0;i--){

                var value=Math.floor(Math.random()*(i+1));
                var temp=array[i];
                array[i]=array[value];
                array[value]=temp;

            //    var array=str[array.length-1];

            }
            var array2=array.join("")
            console.log(array);
            return array2;
          //  return "what happened";
        }

    })

}
}(jQuery));