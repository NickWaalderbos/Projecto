<?php

include_once('connection.php');
session_start();

$a = $_COOKIE['stage'];
echo $a;
if (isset($_POST['SEND'])) {
    $stage = $_COOKIE['stage'];
    setcookie("stage", "", time() - 3600);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stageTester.css">
    <title>Test</title>
</head>
<body>
    <button type="button" onclick="stageUp()">Stage omhoog</button>
    <button type="submit" name="SEND">Send cookies</button>
    <script src='Javascript/stageTester.js'></script>
</body>
</html>
