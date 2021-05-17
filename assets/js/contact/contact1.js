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


        $('form#appointform').validate({
            // onfocusout: true

            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
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
                date: {
                    required: true,
                    // date: true
                },
                message: {
                    required: true,
                    minlength: 5
                },
                department: {
                    required: true,
                    // date: true
                },
                doctor: {
                    required: true,
                    // date: true
                },
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
                phone: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 10 digits"
                },
                email: {
                    required: "no email, no message"
                },
                date: {
                    required: "no date, no message"
                },
                department: {
                    required: "no department, no message"
                },
                doctor: {
                    required: "no doctor, no message"
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
                        $('#appointform :input').attr('disabled', 'disabled');
                        $('#appointform').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('.success-reg').fadeIn()
                            $('.success-reg').addClass('isactive');
                            // $('.success').fadeIn()
                            // $('.success').addClass('isactive');
                            $('#appointform')[0].reset();
                            setTimeout(function() {
                                window.location.replace('index.html');
                            }, 2000);

                        })
                    },


                    error: function() {
                        $('#appointform').fadeTo("slow", 1, function() {
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