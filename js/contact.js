$(function () {
     $('#contact-form #contact-btn').on('click', function(e) {
                        e.preventDefault();
                       
                        var name = $('#name').val();
                        var email = $('#email').val();
                        var phone = $('#phone').val();
                        var subject = $('#subject').val();
                        var message = $('#message').val();
                      
                        var form = new Array({'name': name, 'email': email,'phone': phone,'subject': subject, 'message':message});
                     
       
                        $.ajax({
                            type: 'POST',
                            url: "http://shashicorporation.in/contact.php",
                            data: ({'action': 'contact', 'form': form})
                        }).done(function(data) {
                            $('#contact-message').html(data);
                            $('#name').val("");
                            $('#email').val("");
                            $('#phone').val("");
                            $('#subject').val("");
                            $('#message').val("");
                     

                        });

                  
                    
                    });

    
     $('#carrerform #jobsubmit').on('click', function(e) {
                        e.preventDefault();
                       
                        var name = $('#jobname').val();
                        var email = $('#jobemail').val();
                        var phone = $('#jobphone').val();
                        // var subject = $('#subject').val();
                        var message = $('#jobmessage').val();
                      
                        var form = new Array({'name': name, 'email': email,'phone': phone,'message':message});
                  
       
                        $.ajax({
                            type: 'POST',
                            url: "http://shashicorporation.in/carrer.php",
                            data: ({'action': 'contact', 'form': form})
                        }).done(function(data) {
                            $('#carrermessage').html(data);
                            $('#jobname').val("");
                            $('#jobemail').val("");
                            $('#jobphone').val("");
                            $('#jobmessage').val("");
                     

                        });

                  
                    
                    });
    
    
    
    
});