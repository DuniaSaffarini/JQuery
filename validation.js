//https://jqueryvalidation.org/

/*jQuery.validator.methods
* Description: Object holding all validation methods known to the validator. This can be accessed to override individual methods, while keeping the default messages.
* */
$(function () {



    $.validator.setDefaults({

        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },

    });


    $.validator.addMethod('nowhitespace', function (value, element) {
        return this.optional(element) || /^\S/i.test(value);// /^\S anything except a whitespace
    }, "No white space please");

    $.validator.setDefaults({//Modify default settings for validation.


    });

    /*/*$.validator.methods.email = function( value, element ) {
                  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
                   }*/








    // create method called strong method to check  the pass if value of pass optional or not and if it
    //at least 6 char and have at least 1 digit and 1 char
    $.validator.addMethod('strongPassword', function (value, element) {//add method is a static methid
            return this.optional(element) || value.length >= 6 && (/\d/.test(value)) && (/[a-z]/i.test(value));// test method  Returns true if it finds a match, otherwise it returns false


        }, 'pass must be at least 6 char and have at least one  number and one char'
    );


    $('#register-form').validate({//id= register-form
        rules: {

            email: {//name="email"
                required: true,
                email: true,

                remote: 'http://localhost:3000/',//server will respond
            },
            password: {
                required: true,
                strongPassword: true, // we turn the method on
                //   nowhitespace:true,
            },
            password2: {
                required: true,
                equalTo: "#password",// to be sure that each of pass are equal** here we use id not name
            },
            firstName: {

                required: true,
                nowhitespace: true,
                lettersonly: true,

            }
        },
        messages: {
            email: {// to change  defult messages
                required: 'enter email please',//
                email: 'enter a valid email',
                remote: $.validator.format("{0} is not valid"),


            }
        }


    });

});