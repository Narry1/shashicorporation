<?php  
    

    $sendTo = "info@shashicorporation.in";
    $action = $_POST['action'];

    $name = $_POST['form'][0]['name'];
    $email = $_POST['form'][0]['email'];
    $phone = $_POST['form'][0]['phone'];
    $subject = $_POST['form'][0]['subject'];
    $message = $_POST['form'][0]['message'];
    
    $subject_mail = "Enquiry From Website | Contact US";
    
    $message1 = "This Message Was Sent By : ".$name."\r\n";
    $message1 .= "Email : ".$email."\r\n";
    $message1 .= "Phone No : ".$phone."\r\n";
    $message1 .= "Subject : ".$subject."\r\n";
    $message1 .= "Message : ".$message."\r\n";
    if($name == "" || $email == "" || $phone == "" || $subject == "") {
        echo "<p class=\"error\">Error Occured. Please verify entered data and try again!</p>";
        exit();
    }

    else
    {
        $header = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        
        
        $sent = mail($sendTo, $subject_mail, $message1, $header);
        // $sent1 = mail($sendTo1, $subject, $message, $header);
        if ($sent) {
            echo "<p class=\"success\">Thank You For Your Interest We Will Contact You Back Shortly</p>";
        } else {
            echo "<p class=\"error\">Error Occured. Please verify Entered Data and Try Again!.</p>";
        }
    }





?>
