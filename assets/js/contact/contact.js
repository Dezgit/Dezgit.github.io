(function($) {
    'use strict';



    // (function($) {
    //     "use strict";
    //     $("form").submit(function(event) {
    //         event.preventDefault();

    //         var name = $("#name").val();
    //         var email = $("#email").val();
    //         var contact = $("#contact").val();
    //         var company = $("#company").val();
    //         var message = $("#message").val();
    //         var submit = $("#submit").val();

    //         $(".form-result").load("mail.php", {
    //             name: name,
    //             email: email,
    //             contact: contact,
    //             company: company,
    //             message: message,
    //             submit: submit
    //         });
    //     });
    // }

    // jQuery.validator.addMethod('answercheck', function(value, element) {
    //     return this.optional(element) || /^\bcat\b$/.test(value)
    // }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {

        $('form#consultform').validate({
            // onfocusout: true

            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                contact: {
                    required: true,
                    minlength: 10
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                contact: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 10 digits"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "mail.php",
                    success: function() {
                        $('#contactform :input').attr('disabled', 'disabled');
                        $('#contactform').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('.success-reg').fadeIn()
                            $('.success-reg').addClass('isactive');
                            // $('.success').fadeIn()
                            // $('.success').addClass('isactive');
                            $('#contactform')[0].reset();
                            setTimeout(function() {
                                window.location.replace('index.html');
                            }, 2000);

                        })
                    },


                    error: function() {
                        $('#consultform').fadeTo("slow", 1, function() {
                            $('.error-reg').fadeIn()
                            $('.error-reg').addClass('isactive');
                            // $('#error').fadeIn()
                            // $('#error').addClass('isactive');

                        })
                    }


                })


            }
        })

        $('form#regform').validate({
            // onfocusout: true
            // $name = $email =$business = $message = $states = $pincode = $categories[]= $activity = $turnover = $validity = '';
            // //Delivery Datas
            // $daddress = $daddress1 = $dstates= $dcity = $dpin = $dname = $dcontact = $demail = '';
            rules: {

                name: {
                    required: true,
                    minlength: 6
                },
                email: {
                    required: true,
                    email: true
                },
                business: {
                    required: true,
                },
                message: {
                    required: true,
                    minlength: 6
                },

                states: {
                    required: true,
                },
                pincode: {
                    required: true,
                    minlength: 6
                },
                'categories[]': {
                    required: true,
                    minlength: 1
                },
                // activity: {
                //     required: true,
                // },
                turnover: {
                    required: true,
                    minlength: 2
                },
                // validity: {
                //     required: true,
                // },

                daddress: {
                    required: true,
                    minlength: 6
                },
                daddress1: {
                    required: true,
                    minlength: 6
                },
                dstates: {
                    required: true
                },
                dcity: {
                    required: true,
                    minlength: 3
                },
                dpin: {
                    required: true,
                    minlength: 6
                },
                dname: {
                    required: true,
                    minlength: 6
                },
                dcontact: {
                    required: true,
                    minlength: 6
                },
                demail: {
                    required: true,
                    email: true
                }
            },
            messages: {

                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 6 characters"
                },
                email: {
                    required: "no email, no message"
                },
                business: {
                    required: "Please Select a Business"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                },
                states: {
                    required: "Please Select a State"
                },
                pincode: {
                    required: "come on, you have a Pincode, don't you?",
                    minlength: "your pincode must consist of at least 6 digits"
                },
                'categories[]': {
                    required: "Please Select Atleast One Category",
                    minlength: "Please Select Atleast One Category"
                },
                activity: {
                    required: "Please Select a Business Activity"
                },
                turnover: {
                    required: "come on, you have a turnover, don't you?",
                    minlength: "your turnover must consist of at least 2 characters"
                },
                validity: {
                    required: "Please Select a Validity Period"
                },


                turnover: {
                    required: "come on, you have a turnover, don't you?",
                    minlength: "your turnover must consist of at least 2 characters"
                },

                daddress: {
                    required: "come on, you have an address, don't you?",
                    minlength: "your address must consist of at least 6 characters"
                },
                daddress1: {
                    required: "come on, you have an address, don't you?",
                    minlength: "your address must consist of at least 6 characters"
                },
                dcity: {
                    required: "come on, you have a city, don't you?",
                    minlength: "your city must consist of at least 3 characters"
                },
                dpin: {
                    required: "come on, you have a pincode, don't you?",
                    minlength: "your city must consist of at least 6 digits"
                },
                dname: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your city must consist of at least 6 characters"
                },
                dcontact: {
                    required: "come on, you have a contact, don't you?",
                    minlength: "your city must consist of at least 6 digits"
                },
                demail: {
                    required: "no email, no message"
                }



            },
            highlight: function(label) {
                $(label).closest('.control-group').addClass('error');
            },
            success: function(label) {
                label
                // .text('OK!').addClass('valid')
                // .closest('.control-group').addClass('success');
            },

            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "register.php",
                    success: function() {
                        $('#regform :input').attr('disabled', 'disabled');
                        $('#regform').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('.success-reg').fadeIn()
                            $('.success-reg').addClass('isactive');
                            // $('.success').fadeIn()
                            // $('.success').addClass('isactive');
                            $('#regform')[0].reset();
                            setTimeout(function() {
                                window.location.replace('index.html');
                            }, 2000);

                        })
                    },


                    error: function() {
                        $('#regform').fadeTo("slow", 1, function() {
                            $('.error-reg').fadeIn()
                            $('.error-reg').addClass('isactive');
                            // $('#error').fadeIn()
                            // $('#error').addClass('isactive');

                        })
                    }


                })


            }
        })
    })



})(jQuery);