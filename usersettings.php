<?php

include_once('connection.php');

session_start();
// FUNCTIONS
function emailvalidate($email)
{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "email fout";
        $checker = false;
    }
}
function passwordvalidate($password, $password2)
{
    if ($password !== $password2) {
        $checker = false;
        echo "wachtwoord fout";
    }
}
function queryexecute($query)
{
     // EXECUTE QUERY
     $query->execute();
     header("Location: game.php");
}

unset($_SESSION['error']);

// BACK BUTTON
if (isset($_POST['Back'])) {
    header("Location: game.php");
}
// UPDATE CHECKS
if (isset($_POST['E-mail'])) {
    $checker = true;
    $email = $_POST['E-mail'];
    $id = $_SESSION['loggedInUser'];
    emailvalidate($email);
    if ($checker == true) {
        // QUERY
        $query = $pdo->prepare("UPDATE users SET email = :email WHERE id = :id");
        // BIND
        $query->bindParam(':id', $id);
        $query->bindParam(':email', $email);
        queryexecute($query);
    }
}
       












        $email = $_POST['E-mail'];
        $username = $_POST['username'];
        $password = $_POST['password']; 
        $password2 = $_POST['password2'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles/style.css">
    <title>Settings</title>
</head>
<body>
<div class="background">
    <div class="loginBlock">
        <form method="POST" id="registerButton">
            <label for="username">Verander gebruikersnaam</label>
            <input type="text" name="username" id="username"> 

            <label for="password">Verander wachtwoord</label>
            <input type="password" name="password" id="password">

            <label for="password2">Herhaal wachtwoord</label>
            <input type="password" name="password2" id="password2">

            <label for="E-mail">Verander e-mail</label>
            <input type="email" name="E-mail" id="E-mail"> 
            <div class="backButton">
                <button class="button" type="button" name="Save" onclick="Check()"><span>Save</span></button>
                <button type="submit" class="button" name="Back"><span>Back</span></button>
            </div>
            <div class="errorSpans">
                <span id="usernameError"></span>
                <span id="passwordError"></span>
                <span id="passwordMatchError"></span>
                <span id="emailError"></span>
            </div>
        </form>
    </div>
</div>
<script src='Javascript/UserSettings.js'></script>
</body>
</html>
