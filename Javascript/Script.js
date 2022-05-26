var $ = function (elementID) {

    return document.getElementById(elementID);

}
// Set all music in variable to be called for when needed
var music = $("mainMusic");
var normalAttack = $("normalAttack");
var gameOver = $("gameOver");
var armor = $("armor+");
var speed = $("speed+");
var magicAttack = $("magicAttack");
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
    //document.getElementById("playerPicture").firstChild.remove(); // deze 2 bestaan niet altijd bvb als je op de opties menu zit
    // Hier door kan hij niet null removen en geeft hij een error :)
    //document.getElementById("enemyPicture").firstChild.remove();
    allToBackground()
    toForeground("buttonBlock");
    selectedCH = null;
    boxShadow();
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
arrEnemy["enemy1"] = [60, 60, 40, 45, 50];
arrEnemy["enemy2"] = [70, 30, 65, 60, 25];
arrEnemy["enemy3"] = [55, 30, 40, 45, 80];
arrEnemy["enemy4"] = [80, 70, 50, 20, 30];
arrEnemy["enemy5"] = [80, 70, 50, 20, 30];

//Global enemy
var selectedEnemy = "enemy1";

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
}
function toArena() {
    allToBackground();
    toForeground("arenaBlock");
    boxShadow(null);
    getImgs();
    setStats();
}
//Attacks and Buffs for player

//var playerarmor = arrCH[selectedCH][1]; dit doet het niet en breekt alle code er onder plz fix
//var playerspeed = arrCH[selectedCH][4];

function normalAttack() {
    random = Math.floor(Math.random() * 20) + 10;
    var damage = random * (arrCH[selectedCH][2] / 100);
    damage = damage * (arrEnemy[selectedEnemy][1] / 50);
    document.getElementById("enemyHealth").value = playerAttack(damage);
}

function magicAttack() {
    random = Math.floor(Math.random() * 30) + 20;
    var magicdamage = random * (arrCH[selectedCH][4] / 100);
    document.getElementById("enemyHealth").value = playerAttack(magicdamage);
}

function playerArmor() {
    playerarmor *= 0.1;
}

function playerSpeed() {
    playerspeed *= 0.1;
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
    if (random > selected) {
        return false;
    } else {
        return true;
    }
}

function enemyKilled() {
    stage = getCookieValue("stage");
    if (stage < 1) {
        stage = 1;
    } else {
        stage++;
    }
    document.cookie = "stage=" + stage + "; " + "domain=localhost";
    allToBackground();
    toForeground("nextGameBlock");
}

//Attacks and Buffs for enemy

function enemyTurn() {
    random = Math.floor(Math.random() * 3);
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
    normalAttack.volume = volumeNumber; // VOLUME CHANGE
    magicAttack.volume = volumeNumber; // VOLUME CHANGE
}
/* Dit zijn test functies
Je wilt natuurlijk niet dat SFX word afgespeeld op de main menu ;)
*/
function playAudio() {
    music.play();
    gameOver.play();
    normalAttack.play();
    magicAttack.play();
}
function pauseAudio() {
    music.pause();
    gameOver.pause();
    normalAttack.pause();
    magicAttack.pause();
}