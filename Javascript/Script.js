var $ = function (elementID) {
    return document.getElementById(elementID);
}
var arenacheck = 0;
var enemykilled = false;
// Set all music in variable to be called for when needed
var music = $("mainMusic");
var normalAttackSound = $("normalAttack");
var gameOver = $("gameOver");
var armorvolume = $("armor+");
var speedvolume = $("speed+");
var magicAttackSound = $("magicAttack");
window.addEventListener('load', (event) => {
    $("disabledhoopik").style.display = "none";
    volumecookie = getCookieValue("muziek");
    effectscookie = getCookieValue("effects");
    // Checks if cookies are set then executes volume
    if (effectscookie) {
        armorvolume.volume = effectscookie; // Effects
        speedvolume.volume = effectscookie;
        normalAttackSound.volume = effectscookie;
        magicAttackSound.volume = effectscookie;
        $("SFXslider").value = effectscookie * 100;
    }
    if (volumecookie) {
        music.volume = volumecookie; // Muziek
        gameOver.volume = volumecookie;
        $("MuziekSlider").value = volumecookie * 100;
    }
});

//Brings things to the background
function allToBackground() {
    var messages = document.querySelectorAll(".block");
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.opacity = "-1";
        messages[i].style.zIndex = "-1"
    };
}
//Brings things to the foreground
function toForeground(i) {
    document.getElementById(i).style.opacity = "1";
    document.getElementById(i).style.zIndex = "1";
}

function toSelectCharacter() {
    arenacheck = 0;
    music.play();
    allToBackground();
    toForeground("characterBlock");
    setStage();
}

function setStage() {
    stage = getCookieValue("stage");
    document.getElementById("bar").style.height = ((stage - 1) * 25) + "%";
}

function toMainscreen() {
    allToBackground();
    toForeground("buttonBlock");
    boxShadow();
    resetHealthPic();
    selectedCH = null;
}

function resetHealthPic() {
    if (typeof document.getElementById("playerPicture").firstChild !== undefined) {
        document.getElementById("playerPicture").firstChild.remove();
        document.getElementById("enemyPicture").firstChild.remove();
        document.getElementById("playerHealth").value = arrCH[selectedCH][0];
        document.getElementById("enemyHealth").value = arrEnemy[selectedEnemy][0];
    }
}
function toSettings() {
    allToBackground();
    toForeground("settingsBlock");
}
function showStats() {
    nameCharacter = selectedCH.toUpperCase();
    document.getElementById("characterName").innerText = nameCharacter;
    toForeground("characterStats");
}

function selectValuesHero(health, armor, strength, speed, intelligence) {
    document.getElementById("health").value = health;
    document.getElementById("armor").value = armor;
    document.getElementById("strength").value = strength;
    document.getElementById("speed").value = speed;
    document.getElementById("intelligence").value = intelligence;
}

function boxShadow() {
    document.getElementById("knight").style.boxShadow = "0px 0px 0px black";
    document.getElementById("berserker").style.boxShadow = "0px 0px 0px black";
    document.getElementById("mage").style.boxShadow = "0px 0px 0px black";
    document.getElementById("paladin").style.boxShadow = "0px 0px 0px black";
    if (selectedCH != null) {
        document.getElementById(selectedCH).style.boxShadow = "5px 5px 10px black";
    }
}

function showGameStage() {
    toForeground("gameStageBlock");
}

//Character stats
const arrCH = new Object();
arrCH["knight"] = [65, 60, 40, 45, 35]; // Health, armor, strength, speed , intellegence
arrCH["berserker"] = [75, 25, 70, 60, 25];
arrCH["mage"] = [50, 30, 40, 35, 80];
arrCH["paladin"] = [90, 90, 45, 20, 10];

//Global selected character
var selectedCH;

//Enemy stats
const arrEnemy = new Object();
arrEnemy["enemy1"] = [70, 30, 65, 60, 25]; // Health, armor, strength, speed , intellegence
arrEnemy["enemy2"] = [70, 30, 65, 35, 65];
arrEnemy["enemy3"] = [55, 20, 40, 45, 50];
arrEnemy["enemy4"] = [80, 70, 50, 20, 30];
arrEnemy["enemy5"] = [100, 70, 95, 25, 35];

//Global enemy
function globalEnemy() {
    if (getCookieValue("stage") < 1) {
        document.cookie = "stage=1;domain=localhost";
        selectedEnemy = "enemy1";
    } else if (getCookieValue("stage") > 5) {
        document.cookie = "stage=5;domain=localhost";
        selectedEnemy = "enemy5";
    } else {
        selectedEnemy = "enemy" + getCookieValue("stage");
    }
}

var selectedEnemy = "";
globalEnemy();

function selectHero(nameCharacter) {
    document.cookie = "CH=" + nameCharacter + "; " + "domain=localhost";
    selectedCH = nameCharacter;
    selectValuesHero(arrCH[selectedCH][0], arrCH[selectedCH][1], arrCH[selectedCH][2], arrCH[selectedCH][3], arrCH[selectedCH][4]);
    boxShadow();
    showStats();
    showGameStage();
}

//Get images

function getImgs() {
    var playerimg = document.createElement("img");
    playerimg.src = "Images/" + nameCharacter + ".png";
    document.getElementById("playerPicture").appendChild(playerimg);

    var enemyimg = document.createElement("img");
    enemyimg.src = "Images/" + selectedEnemy + ".png";
    document.getElementById("enemyPicture").appendChild(enemyimg);
}

function setStats() {
    document.getElementById("enemyHealth").max = arrEnemy[selectedEnemy][0];
    document.getElementById("playerHealth").max = arrCH[selectedCH][0];
}
function toArena() {
    if (typeof nameCharacter !== "undefined") {
        if (arenacheck == 0) {
            arenacheck = 1;
        allToBackground();
        toForeground("arenaBlock");
        boxShadow(null);
        getImgs();
        setStats();
        }
    }
}
//Attacks and Buffs for player

if (typeof arrCH[0] != "undefined") {
    var playerarmor = arrCH[selectedCH][1];
    var playerspeed = arrCH[selectedCH][4];
}

function normalAttack() {
    normalAttackSound.play();
    random = Math.floor(Math.random() * 20) + 5;
    var damage = random * (arrCH[selectedCH][2] / 100);
    damage = damage * (arrEnemy[selectedEnemy][1] / 50);
    document.getElementById("enemyHealth").value = playerAttack(damage);
    enemyTurn()
}

function magicAttack() {
    magicAttackSound.play();
    random = Math.floor(Math.random() * 25) + 10
    var magicdamage = random * (arrCH[selectedCH][4] / 100);
    document.getElementById("enemyHealth").value = playerAttack(magicdamage);
    enemyTurn()
}

function playerArmor() {
    armorvolume.play();
    playerarmor *= 0.3;
    enemyTurn()
    playerarmor = arrCH[selectedCH][1];
}

function playerSpeed() {
    speedvolume.play();
    playerspeed *= 0.3;
    enemyTurn()
    playerspeed = arrCH[selectedCH][4];
}

function playerAttack(damage) {
    value = document.getElementById("enemyHealth").value;
    if (chanceToDodge(arrEnemy[selectedEnemy][3]) == false) {
        return value;
    } else {
        total = value - damage;
        if (total > 1) {
            return total;
        } else {
            enemyKilled();
            enemykilled = true;
            return 1;
        }
    }
}

/* function myMove() {
    let id = null;
    const elem = document.getElementById("playerPicture");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}*/

//Global function dodge

function chanceToDodge(selected) {
    random = Math.floor(Math.random() * 100);
    if (random < selected) {
        return false;
    } else {
        return true;
    }
}
//next stage to database

function enemyKilled() {
    allToBackground();
    $("disabledhoopik").style.display = "inline";
    stage = getCookieValue("stage");
    if (stage < 1) {
        stage = 1;
    } else if (stage >= 5) {
        stage = 5;
        toForeground("endGameBlock");
    } else {
        stage++;
        toForeground("nextGameBlock");
    }
    document.cookie = "stage=" + stage + "; " + "domain=localhost";
}

//get value of the cookie

function getCookieValue(name) {
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
}

//Attacks and Buffs for enemy

function allButtons(disable) {
    var messages = document.querySelectorAll("#button");
    for (var i = 0; i < messages.length; i++) {
        messages[i].disabled = disable;
    };
}

function enemyTurn() {
    allButtons(true);
    arrEnemy[selectedEnemy][1];
    arrEnemy[selectedEnemy][4];
    random = Math.floor(Math.random() * 3);
    if (random = 0) {
        normalAttackEnemy()
    } else if (random = 1) {
        magicAttackEnemy()
    } else if (random = 2) {
        ArmorEnemy()
    } else if (random = 3) {
        SpeedEnemy()
    }
    allButtons(false);
}

//Attacks and Buffs for the enemy

if (typeof arrEnemy[0] != "undefined") {
    var enemyArmor = arrEnemy[selectedEnemy][1];
    var enemySpeed = arrEnemy[selectedEnemy][4];
}

function normalAttackEnemy() {
    random = Math.floor(Math.random() * 20) + 5;
    var damage = random * (arrEnemy[selectedEnemy][2] / 100);
    damage = damage * (arrCH[selectedCH][2] / 50);
    document.getElementById("playerHealth").value = enemyAttack(damage);
}

function magicAttackEnemy() {
    random = Math.floor(Math.random() * 25) + 10;
    var magicdamage = random * (arrEnemy[selectedEnemy][4] / 100);
    document.getElementById("playerHealth").value = enemyAttack(magicdamage);
}

function ArmorEnemy() {
    enemyArmor *= 0.3;
}

function SpeedEnemy() {
    enemySpeed *= 0.3;
}

function enemyAttack(damage) {
    value = document.getElementById("playerHealth").value;
    if (chanceToDodge(arrCH[selectedCH][3]) == false) {
        return value;
    } else {
        total = value - damage;
        if (total > 1) {
            return total;
        } else {
            playerKilled();
            enemykilled = true;
            return 1;
        }
    }
}

function playerKilled() {
    music.pause();
    gameOver.play();
    allToBackground();
    toForeground("gameOverBlock");

}

function retry() {
    arenacheck = 0;
    gameOver.pause();
    music.play();
    resetHealthPic()
    toArena();
}

function getCookieValue(name) {
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
}

//Muziek en volume

function volumeslide() {
    let volumeMuziek = $("MuziekSlider"); // SLIDER VALUE
    volumeNumber = volumeMuziek.value / 100; // DELEN DOOR 100 WANT HIJ PAKT VALUES ONDER 1
    music.volume = volumeNumber; // VOLUME CHANGE
    gameOver.volume = volumeNumber; // VOLUME CHANGE
    document.cookie = "muziek=" + volumeNumber + "; " + "domain=localhost";
}
function effectslide() {
    let volumeEffect = $("SFXslider"); // SLIDER VALUE
    volumeNumber = volumeEffect.value / 100; // DELEN DOOR 100 WANT HIJ PAKT VALUES ONDER 1
    armor.volume = volumeNumber; // VOLUME CHANGE
    speed.volume = volumeNumber; // VOLUME CHANGE
    normalAttackSound.volume = volumeNumber; // VOLUME CHANGE
    magicAttackSound.volume = volumeNumber; // VOLUME CHANGE
    document.cookie = "effects=" + volumeNumber + "; " + "domain=localhost";
}

//Deset stages

function reset() {
    document.cookie = "stage=1;domain=localhost";
    toMainscreen();
}
