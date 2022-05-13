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
            <button class="button" onclick="toselectCH()"><span>Play</span></button>
            <button class="button"><span>Options</span></button>
            <button class="button"><span>Exit game</span></button>
        </div>
        <div class="characterBlock" id="characterBlock">
            <div class="gameProgressBlock">
                <div class="           "></div>
            </div>
            <div class="characterSelect">
                <button class="character" onclick="selectKnight()"><img src="Images/Knight.png" alt="KnightCH"></button>
                <button class="character" onclick="selectBerserker()"><img src="Images/Berserker.png" alt="BerserkerCH"></button>
                <button class="character" onclick="selectMage()"><img src="Images/Mage.png" alt="MageCH"></button>
                <button class="character" onclick="selectPaladin()"><img src="Images/Paladin.png" alt="PaladinCH"></button>
                <div class="chooseBlock">
                    <button class="button" onclick=""><span>Select</span></button>
                    <button class="button" onclick="tomainscreen()"><span>Back</span></button>
                </div>
            </div>
            <div class="characterStats" id="characterStats">
                <div class="characterName"></div>
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