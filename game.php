<?php
session_start();
include_once('connection.php');
//setcookie("stage", "", time() - 3600);
$id = 1;    //$_SESSION['loggedInUser']
$query = $pdo->prepare("SELECT * FROM user_info WHERE id = :id");
$query->bindParam(':id', $id);
$query->execute();
$stage = $query->fetch();
if ($stage !== true) {
    setcookie("stage", $stage["stage"], time() - 9999, "/");
}

if (isset($_POST['save'])) {
    $stage = $_COOKIE['stage'];
    $query = $pdo->prepare("UPDATE user_info SET stage = :stage WHERE id = :id");
    // BIND
    $query->bindParam(':stage', $stage);
    $query->bindParam(':id', $id);
    // EXECUTE QUERY
    $query->execute();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project</title>
    <link rel="stylesheet" href="Styles/style.css">
    <script src="Javascript/script.js"></script>
</head>
<body>
    <div class="background" id="background">
        <div class="block" id="buttonBlock">
            <button class="button" onclick="toSelectCharacter()"><span>Play</span></button>
            <button class="button"><span>Options</span></button>
            <button class="button"><span>Exit game</span></button>
        </div>
        <div class="block" id="characterBlock">
            <div class="gameStageBlock" id="gameStageBlock">
                <div class="gameStage">Stage 1: X</div>
                <div class="gameStage">Stage 2: X</div>
                <div class="gameStage">Stage 3: X</div>
                <div class="gameStage">Stage 4: X</div>
                <div class="gameStage">Stage 5: X</div>
            </div>
            <div class="characterSelect" id="characterSelect">
                <button class="character" id="knight" onclick="selectHero('knight')"><img src="Images/Knight.png" alt="KnightCH"></button>
                <button class="character" id="berserker" onclick="selectHero('berserker')"><img src="Images/Berserker.png" alt="BerserkerCH"></button>
                <button class="character" id="mage" onclick="selectHero('mage')"><img src="Images/Mage.png" alt="MageCH"></button>
                <button class="character" id="paladin" onclick="selectHero('paladin')"><img src="Images/Paladin.png" alt="PaladinCH"></button>
                <div class="chooseBlock">
                    <button class="button" onclick="toArena()"><span>Select</span></button>
                    <button class="button" onclick="toMainscreen()"><span>Back</span></button>
                </div>
            </div>
            <div class="characterStats" id="characterStats">
                <h2 class="characterName" id="characterName"></h2>
                <div class="statName">Health
                    <progress class="progressbar" id="health" value="100" max="100"></progress>
                </div>
                <div class="statName">Armor
                    <progress class="progressbar" id="armor" value="100" max="100"></progress>
                </div>
                <div class="statName">Strength
                    <progress class="progressbar" id="strength" value="100" max="100"></progress>
                </div>
                <div class="statName">Speed
                    <progress class="progressbar" id="speed" value="100" max="100"></progress>
                </div>
                <div class="statName">Intelligence
                    <progress class="progressbar" id="intelligence" value="100" max="100"></progress>
                </div>
            </div>
        </div>
        <div class="block" id="arenaBlock">
            <div class="characterSlots">
                <div class="characterSlot">
                    <div class="picture" id="playerPicture"></div>
                    <div class="progressBlock">
                        <div class="statName">Health</div>
                        <progress class="progress" id="playerHealth" value="100" max="100"></progress>
                    </div>
                </div>
                <div class="characterSlot">
                    <div class="picture" id="enemyPicture"></div>
                    <div class="progressBlock">
                        <div class="statName">Health</div>
                        <progress class="progress" id="enemyHealth" value="100" max="100"></progress>
                    </div>
                </div>
            </div>
            <div class="buttonAttackBlock" id="buttonAttackBlock">
                <button class="button" onclick="normalAttack()"><span>Normal attack</span></button>
                <button class="button" onclick="magicAttack()"><span>Magic attack</span></button>
                <button class="button" onclick="armor()"><span>Armor+</span></button>
                <button class="button" onclick="speed()"><span>Speed+</span></button>
            </div>
        </div>
        <div class="block" id="gameOverBlock">
            <h1>You lost</h1>
            <div class="gameOverButtons">
                <button class="button" onclick="toArena()"><span>Retry</span></button>
                <button class="button" onclick="toMainscreen()"><span>Exit to mainmenu</span></button>
            </div>
        </div>
        <div class="block" id="nextGameBlock">
            <h1>You won</h1>
            <div class="nextGameButtons">
                <form method="POST">
                    <button type="submit" name="save" class="button" onclick="toNextenemy()"><span>Next Fight</span></button>
                    <button type="submit" name="save" class="button" onclick="toMainscreen()"><span>Exit to mainmenu</span></button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>