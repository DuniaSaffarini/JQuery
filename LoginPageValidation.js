$(function () {

    $.validator.addMethod('focus', function (value, element) {
            $(this).addClass('highlight');

        }, ''
    );
    /*  $.validator.addMethod('blur',function(value, element) {
            $(this).parents('div').removeClass('highlight');
      },'blur');
    */
    /*/*$.validator.methods.email = function( value, element ) {
                  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
                   }*/
    // create method called strong method to check  the pass if value of pass optional or not and if it
    //at least 6 char and have at least 1 digit and 1 char
    $.validator.addMethod('strongPassword', function (value, element) {//add method is a static methid
            return this.optional(element) || value.length >= 6 && (/\d/.test(value)) && (/[a-z]/i.test(value));// test method  Returns true if it finds a match, otherwise it returns false
        }, 'Password must be at least 6 char and have at least one  number and one char'
    );
    $('#register-form').validate({//id= register-form
        rules: {
            username: {//name="username"
                required: true,
                minlength: "4",
                focus: true,
                // remote: 'http://localhost:3000/',//server will respond
            },
            password: {
                required: true,
                strongPassword: true, // we turn the method on
                //   nowhitespace:true,
                focus: true,
            },
            /*  email: {//name="email"
                  required: true,
                  email: true,
                  // remote: 'http://localhost:3000/',//server will respond
              },*/
        },
        messages: {
            username: {// to change  defult messages
                required: 'UserName is required',//
            },
            password: {// to change  defult messages
                required: 'Password is required',//
            },

            email: {// to change  defult messages
                required: 'enter email please',//
                email: 'enter a valid email',
                // remote: $.validator.format("{0} is not valid"),

            },
            /* errorElement: "div",
             wrapper: "div",  // a wrapper around the error message
             errorPlacement: function(error, element) {
                 offset = element.offset();
                 error.insertBefore(element)
                 error.addClass('message');  // add a class to the wrapper
                 error.css('position', 'absolute');
                 error.css('left', offset.left + element.outerWidth());
                 error.css('top', offset.top);
             }*/
        }
    });

});