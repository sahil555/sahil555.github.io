<?php
  $recipient = 'sahil555kureel@gmail.com';

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Location: ../index.html?contact=error');
    exit;
  }

  $name = trim($_POST['name'] ?? '');
  $email = trim($_POST['email'] ?? '');
  $subject = trim($_POST['subject'] ?? '');
  $message = trim($_POST['message'] ?? '');

  if ($name === '' || $email === '' || $subject === '' || $message === '') {
    header('Location: ../index.html?contact=error');
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: ../index.html?contact=error');
    exit;
  }

  $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = array(
    'From: ' . $name . ' <' . $email . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
  );

  $mail_sent = mail($recipient, $subject, $email_body, implode("\r\n", $headers));

  if ($mail_sent) {
    header('Location: ../index.html?contact=success');
    exit;
  }

  header('Location: ../index.html?contact=error');
  exit;
?>
