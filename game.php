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
    <div class="background">
        <div class="buttonBlock" id="buttonBlock">
            <button class="button" onclick="toSelectCharacter()"><span>Play</span></button>
            <button class="button"><span>Options</span></button>
            <button class="button"><span>Exit game</span></button>
        </div>
        <div class="characterBlock" id="characterBlock">
            <div class="gameStageBlock">
                <div class="gameStage">Stage 1: X</div>
                <div class="gameStage">Stage 2: X</div>
                <div class="gameStage">Stage 3: X</div>
                <div class="gameStage">Stage 4: X</div>
                <div class="gameStage">Stage 5: X</div>
            </div>
            <div class="characterSelect" id="characterSelect">
                <button class="character" id="knight" onclick="selectKnight()"><img src="Images/Knight.png" alt="KnightCH"></button>
                <button class="character" id="berserker" onclick="selectBerserker()"><img src="Images/Berserker.png" alt="BerserkerCH"></button>
                <button class="character" id="mage" onclick="selectMage()"><img src="Images/Mage.png" alt="MageCH"></button>
                <button class="character" id="paladin" onclick="selectPaladin()"><img src="Images/Paladin.png" alt="PaladinCH"></button>
                <div class="chooseBlock">
                    <button class="button" onclick=""><span>Select</span></button>
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
    </div>
</body>
</html>