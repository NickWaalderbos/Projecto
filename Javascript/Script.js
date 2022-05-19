//Brings things to the background
function toBackground(i) {
    document.getElementById(i).style.opacity = "0";
    document.getElementById(i).style.zIndex = "-1";
}
//Brings things to the foreground
function toForeground(i) {
    document.getElementById(i).style.opacity = "1";
    document.getElementById(i).style.zIndex = "1";
}

function toSelectCharacter() {
    toBackground("buttonBlock");
    toForeground("characterBlock");
}

function toMainscreen() {
    toForeground("buttonBlock");
    toBackground("characterBlock");
    toBackground("characterStats");
    toBackground("gameStageBlock")
    selectedCH = null;
    boxShadow();
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
    selectedCH = nameCharacter;;
    selectValuesHero(arrCH[nameCharacter][0], arrCH[nameCharacter][1], arrCH[nameCharacter][2], arrCH[nameCharacter][3], arrCH[nameCharacter][4]);
    boxShadow();
    showStats();
    showGameStage();
}

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
    toBackground("characterBlock");
    toForeground("arenaBlock");
    boxShadow(null);
    getImgs();
    setStats();
}
//Attacks and Buffs

function normalAttack() {
    damage = 15 * (100 / arrCH[selectedCH][2])
    attack(damage);
}

function magicAttack() {
    damage = 20 * (100 / arrCH[selectedCH][4]);
    attack(damage);
}

function attack(damage) {
    value = document.getElementById("enemyHealth").value;
    total = value - damage;
    if (total > 0) {
        document.getElementById("enemyHealth").value = total;
    } else {
        enemyKilled();
    }
}