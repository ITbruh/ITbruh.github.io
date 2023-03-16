<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $phone = $_POST['phone'];

  // Отправка письма
  $to = 'rskankov@example.com';
  $subject = 'Номер телефона';
  $message = 'Номер телефона: ' . $phone;
  $headers = 'From: rskankov@example.com' . "\r\n" .
    'Reply-To: rskankov@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}
?>