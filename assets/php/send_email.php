<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    
        // Set recipient email address
        $to = 'pateekpatriotasme@gmail.com';
    
        // Set email subject
        $subject = 'New Message from Your Portfolio Website';
    
        // Build email headers
        $headers = "From: $name <$email>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
    
        // Build email body
        $body = "Name: $name\n";
        $body .= "Email: $email\n\n";
        $body .= "Message:\n$message";
    
        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo 'Message sent successfully.';
        } else {
            echo 'Failed to send message.';
        }
    }
    ?>