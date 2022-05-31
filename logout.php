<?php

session_start();
unset($_SESSION['loggedInUser']);  
setcookie("stage", "", time() - 3600); 
header('Refresh: 5; URL=inlog.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles/style.css">
    <title>Logged out</title>
</head>
<body>
    <div class="logOutContainer">
    <h1>U bent uitgelogd</h1>
    <h2>U word zo naar het inlog scherm gestuurd</h2>
    </div>
</body>
</html>
