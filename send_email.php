<?php

if(isset($_POST['email'])) {
    $email_to = "rskankov@gmail.com"; // адрес получателя
    $email_subject = "Проверка"; // тема письма
    $email_from = $_POST['rskankov@gmail.com']; // адрес отправителя

    $email_message = "Текст письма."; // текст письма

    // Отправка письма с помощью функции mail()
    mail($email_to, $email_subject, $email_message, "From: ".$email_from);

    echo "Сообщение отправлено!";
}
?>