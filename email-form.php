<?php
   $first_name = $_POST['first_name'];
   $last_name = $_POST['last_name'];
   $telephone = $_POST['telephone'];
   $email = $_POST['email'];
   $header = $_POST['email'];
   $message = $_POST['message'];
   $message .= "\n\n" . $telephone;
   $recipient = "anderson.amanda403@gmail.com";
   $mailheader = "From: $email \r\n";
   mail($recipient, $header, $message, $telephone) or die("Error!");
   echo "<script>console.log('name: " . $first_name. "');</script>";
   echo "<script>window.location.href('https://amandaanderson.io');</script>";
?>