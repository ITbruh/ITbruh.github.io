<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $phone = $_POST['phone'];

  // Отправка письма
  $to = 'ваш_email@example.com';
  $subject = 'Номер телефона';
  $message = 'Номер телефона: ' . $phone;
  $headers = 'From: ваш_email@example.com' . "\r\n" .
    'Reply-To: ваш_email@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}
?>