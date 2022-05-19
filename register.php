<?php

include_once('connection.php');

session_start();

unset($_SESSION['error']);
if (isset($_POST['Back'])) {
    header("Location: inlog.php");
}
if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['password2']) && isset($_POST['E-mail'])) {
    // SET VARIABLES
    try {
        $checker = true;
        $email = $_POST['E-mail'];
        $username = $_POST['username'];
        $password = $_POST['password']; 
        $password2 = $_POST['password2'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "email fout";
            $checker = false;
        }
        if ($password !== $password2) {
            $checker = false;
            echo "wachtwoord fout";
        }
        if ($checker == true) {
            // QUERY
            $query = $pdo->prepare("INSERT INTO users (username, password, email)
            VALUES (:username, :password, :email)");
            // BIND
            $query->bindParam(':username', $username);
            $query->bindParam(':password', $password);
            $query->bindParam(':email', $email);
        // EXECUTE QUERY
            $query->execute();
            header("Location: inlog.php");
        }
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        if (strpos($error_message, "email") !== false) {
            echo "<div class='errorbox'><h1>E-mail al in gebruik</h1>";
            echo "<br>";
            echo "<h1>Je word terug gestuurd naar het login scherm</h1></div>";
            header('Refresh: 4; URL=inlog.php');
        } else if (strpos($error_message, "username") !== false) {
            echo "<div class='errorbox'><h1>Username al in gebruik</h1>";
            echo "<br>";
            echo "<h1>Je word terug gestuurd naar het register scherm</h1></div>";
            header('Refresh: 4; URL=register.php');
        } else {
            echo "<h1>Neem contact op met de berheerder en geef hem dit door</h1>";
            echo "<h1>Error message: <?php echo $error_message; ?></h1>";
        }
        include('ErrorPages/duplicateErrors.php');
        exit();
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
    <title>Register</title>
</head>
<body>
<div class="background">
    <div class="loginBlock">
        <form method="POST" id="registerButton">
            <label for="username">Gebruikersnaam</label>
            <input type="text" name="username" id="username"> 

            <label for="password">Wachtwoord</label>
            <input type="password" name="password" id="password">

            <label for="password2"> Herhaal wachtwoord</label>
            <input type="password" name="password2" id="password2">

            <label for="E-mail">E-mail</label>
            <input type="email" name="E-mail" id="E-mail"> 
            <div class="backButton">
                <button class="button" type="button" name="Register" onclick="Check()"><span>Register</span></button>
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
<script src='Javascript/RegisterErrors.js'></script>
</body>
</html>
