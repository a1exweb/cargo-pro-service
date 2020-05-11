<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Форма успешно отправлена";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'cargoproservice.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'shubizle11Velet'; // Логин на почте
    $mail->Password   = 'shubizle11Velet11'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('info@cargoproservice.ru', 'CARGO-PRO-SERVICE'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('info@cargoproservice.ru');  
    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Пришёл вопрос, нужно ответить!';
    $mail->Body    = "<b>Имя:</b> $userName <br>
    <b>Телефон:</b> $userPhone <br> <b>Вопрос:</b> $userQuestion";
// Проверяем отравленность сообщения
if ($mail->send()) {
    // header('Location: thanks.php');
    echo 'Форма успешно отправлена';
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// header('Location: thanks.php');