<?php

if (isset($_POST['submit'])) {
  $firstname = $_POST['Fname'];
  $lastname = $_POST['Lname'];
  $mailFrom = $_POST['Email'];
  $message = $_POST['subject'];

  $mailTo = "Kyle_Moore2@hotmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$firstname.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact/index.html");
}


 ?>
