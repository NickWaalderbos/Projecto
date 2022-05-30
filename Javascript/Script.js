var $ = function (elementID) {

    return document.getElementById(elementID);

}
// Set all music in variable to be called for when needed
var music = $("mainMusic");
var normalAttackSound = $("normalAttack");
var gameOver = $("gameOver");
var armor = $("armor+");
var speed = $("speed+");
var magicAttackSound = $("magicAttack");

//Brings things to the background
function allToBackground() {
    var messages = document.querySelectorAll(".block");
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.opacity = "0";
        messages[i].style.zIndex = "-1"
    };
}
//Brings things to the foreground
function toForeground(i) {
    document.getElementById(i).style.opacity = "1";
    document.getElementById(i).style.zIndex = "1";
}

function toSelectCharacter() {
    allToBackground();
    toForeground("characterBlock");
}

function toMainscreen() {
    allToBackground();
    toForeground("buttonBlock");
    boxShadow();
    resetHealthPic();
    selectedCH = null;
}

function resetHealthPic() {
    document.getElementById("playerPicture").firstChild.remove();
    document.getElementById("enemyPicture").firstChild.remove();
    document.getElementById("playerHealth").value = arrCH[selectedCH][0];
    document.getElementById("enemyHealth").value = arrEnemy[selectedEnemy][0];
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
arrCH["knight"] = [60, 55, 40, 45, 50];
arrCH["berserker"] = [70, 30, 65, 60, 25];
arrCH["mage"] = [55, 30, 40, 45, 80];
arrCH["paladin"] = [80, 70, 50, 20, 30];

//Global selected character
var selectedCH;

//Enemy stats
const arrEnemy = new Object();
arrEnemy["enemy1"] = [70, 30, 65, 60, 25];
arrEnemy["enemy2"] = [70, 30, 65, 40, 65];
arrEnemy["enemy3"] = [55, 30, 40, 70, 50];
arrEnemy["enemy4"] = [80, 70, 50, 20, 30];
arrEnemy["enemy5"] = [80, 70, 50, 20, 30];

//Global enemy
var selectedEnemy = "enemy" + getCookieValue("stage");
console.log(getCookieValue("stage"));

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
    allToBackground();
    toForeground("arenaBlock");
    boxShadow(null);
    getImgs();
    setStats();
}
//Attacks and Buffs for player

if (typeof arrCH[0] != "undefined") {
    var playerarmor = arrCH[selectedCH][1];
    var playerspeed = arrCH[selectedCH][4];
}

function normalAttack() {
    random = Math.floor(Math.random() * 20) + 5;
    var damage = random * (arrCH[selectedCH][2] / 100);
    damage = damage * (arrEnemy[selectedEnemy][1] / 50);
    document.getElementById("enemyHealth").value = playerAttack(damage);
    enemyTurn()
}

function magicAttack() {
    random = Math.floor(Math.random() * 25) + 10
    var magicdamage = random * (arrCH[selectedCH][4] / 100);
    document.getElementById("enemyHealth").value = playerAttack(magicdamage);
    enemyTurn()
}

function playerArmor() {
    playerarmor *= 0.3;
    enemyTurn()
    playerarmor = arrCH[selectedCH][1];
}

function playerSpeed() {
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
            return 1;
        }
    }
}

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
    stage = getCookieValue("stage");
    if (stage < 1) {
        stage = 1;
    } else if (stage > 5) {
        stage = 5;
    } else {
        stage++;
    }
    document.cookie = "stage=" + stage + "; " + "domain=localhost";
    allToBackground();
    toForeground("nextGameBlock");
}

//get value of the cookie

function getCookieValue(name) {
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
}

//Attacks and Buffs for enemy

function enemyTurn() {
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
enemySpeed
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
            return 1;
        }
    }
}

function playerKilled() {
    allToBackground();
    toForeground("gameOverBlock");
}

function retry() {
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
}
function effectslide() {
    let volumeEffect = $("SFXslider"); // SLIDER VALUE
    volumeNumber = volumeEffect.value / 100; // DELEN DOOR 100 WANT HIJ PAKT VALUES ONDER 1
    armor.volume = volumeNumber; // VOLUME CHANGE
    speed.volume = volumeNumber; // VOLUME CHANGE
    normalAttackSound.volume = volumeNumber; // VOLUME CHANGE
    magicAttackSound.volume = volumeNumber; // VOLUME CHANGE
}
/* Dit zijn test functies
Je wilt natuurlijk niet dat SFX word afgespeeld op de main menu ;)
*/
function playAudio() {
    music.play();
    gameOver.play();
    normalAttackSound.play();
    magicAttackSound.play();
}
function pauseAudio() {
    music.pause();
    gameOver.pause();
    normalAttackSound.pause();
    magicAttackSound.pause();
}
