<?php

include_once('connection.php');

session_start();

unset($_SESSION['error']);
if (isset($_POST['register'])) {
    header("Location: register.php");
}
if (isset($_POST['login'])) {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password']; 
        $query = $pdo->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
        $query->bindParam(':username', $username);
        $query->bindParam(':password', $password);
    //
        $query->execute();
        $user = $query->fetch();
    //
        if ($user !== false) {
            $_SESSION['loggedInUser'] = $user['id'];
            header("Location: game.php");
            die();
        }
    //
        $_SESSION['error'] = "Gebruikersnaam of wachtwoord is ongeldig.";
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles/style.css">
    <title>Log in</title>
</head>
<body>
<div class="background">
    <div class="loginBlock">
        <form method="POST">
            <label for="username">Gebruikersnaam</label>
            <input type="text" name="username" id="username">

            <label for="password">Wachtwoord</label>
            <input type="password" name="password" id="password">

            <button type="submit" class="button" name="login"><span>Log in</span></button>
        </form>
        <form method="POST">
            <button type="submit" class="button" name="register"><span>Register</span></button>
        </form>
        <!-- dit is Javascript vetrouw mij -->
        <?php if (isset($_SESSION['error'])) { ?>
            <div style="color: red;"><?= $_SESSION['error']; ?></div>
        <?php } ?>
    </div>
</div>
</body>
</html>
