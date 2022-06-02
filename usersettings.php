<?php

include_once('connection.php');

session_start();
// Kan niet naar deze pagina zonder succesvolle inlog
if (!isset($_SESSION['loggedInUser'])) {
    header("Location: index.php");
    exit;
}
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
// DELETE ACCOUNT
if (isset($_POST['Delete'])) {
    $id = $_SESSION['loggedInUser'];
    $query = $pdo->prepare("DELETE FROM users WHERE users .id = :id");
    $query->bindParam(':id', $id);
    queryexecute($query);
    $query = $pdo->prepare("DELETE FROM user_info WHERE user_info .id = :id");
    $query->bindParam(':id', $id);
    queryexecute($query);
    unset($_SESSION['loggedInUser']);
}
// UPDATE CHECKS
try {
    // USERNAME
    if (isset($_POST['username'])) {
        $checker = true;
        // IF EMPTY
        if ($_POST['username'] == "") {
            $checker = false;
        }
        $username = $_POST['username'];
        $id = $_SESSION['loggedInUser'];
        if ($checker == true) {
            // QUERY
            $query = $pdo->prepare("UPDATE users SET username = :username WHERE id = :id");
            // BIND
            $query->bindParam(':id', $id);
            $query->bindParam(':username', $username);
            queryexecute($query);
        }
    }
    // E-MAIL
    if (isset($_POST['E-mail'])) {
        $checker = true;
        $email = $_POST['E-mail'];
        // IF EMPTY
        if ($_POST['E-mail'] == "") {
            $checker = false;
        }
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
    // PASSWORD
    if (isset($_POST['password']) && isset($_POST['password2'])) {
        $checker = true;
        $password = $_POST['password']; 
        $password2 = $_POST['password2'];
        // IF EMPTY
        if ($_POST['password'] == "") {
            $checker = false;
        }
        $id = $_SESSION['loggedInUser'];
    
        if ($checker == true) {
        // QUERY
            $query = $pdo->prepare("UPDATE users SET password = :password WHERE id = :id");
        // BIND
            $query->bindParam(':id', $id);
            $query->bindParam(':password', $password);
            queryexecute($query);
        }
    } 
} catch (PDOException $e) {
    $error_message = $e->getMessage();
    // MAIL ERROR CATCH
    if (strpos($error_message, "email") !== false) {
        echo "<div class='errorbox'><h1>E-mail al in gebruik</h1>";
        echo "<br>";
        echo "<h1>Je word terug gestuurd naar het login scherm</h1></div>";
        header('Refresh: 4; URL=index.php');
    } else if (strpos($error_message, "username") !== false) {
        // USERNAME ERROR CATCH
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
            <button type="submit" class="button" id="deleteaccount" name="Delete"><span>Verwijder account</span></button>
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
