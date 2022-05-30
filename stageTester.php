<?php

include_once('connection.php');
session_start();
$id = 1;
$hero = "knight";
$stage = $_COOKIE['stage'];
setcookie("stage", "", time() - 3600);
echo $stage;
if ($stage > 1) {
    /*$query = $pdo->prepare("INSERT INTO user_info (id, stage, hero)
            VALUES (:id, :stage, :hero)"); */
            $query = $pdo->prepare("UPDATE user_info SET stage = :stage WHERE id = :id");
        // BIND
        $query->bindParam(':id', $id);
        $query->bindParam(':stage', $stage);
        //$query->bindParam(':hero', $hero);
    // EXECUTE QUERY
        $query->execute();
}
if (isset($_POST['SEND'])) {
    setcookie("stage", "", time() - 3600);
}   $stage = $_COOKIE['stage'];
 
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
    <form method="POST">
    <button type="submit" name="SEND">Send cookies</button>
    </form>
    <script src='Javascript/stageTester.js'></script>
</body>
</html>
