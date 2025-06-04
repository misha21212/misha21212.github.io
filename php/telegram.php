<?php

$name = $_POST['name'];
$number = $_POST['number'];
$token = "7463890978:AAFUemWSZNqmonm2piekAXOifD7Md9e4gw0";
$chat_id = "-1002657984220";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $number,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>