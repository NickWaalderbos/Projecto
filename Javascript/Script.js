//Brings thing to the background
function toBackground(i) {
    document.getElementById(i).style.opacity = "0";
    document.getElementById(i).style.zIndex = "-1";
}
//Brings thing to the foreground
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
    boxShadow(null);
}

function showStats(nameCharacter) {
    nameCharacter = nameCharacter.toUpperCase();
    toForeground("characterStats")
    document.getElementById("characterName").innerText = nameCharacter;
}

function selectValuesHero(health, armor, strength, speed, intelligence) {
    document.getElementById("health").value = health;
    document.getElementById("armor").value = armor;
    document.getElementById("strength").value = strength;
    document.getElementById("speed").value = speed;
    document.getElementById("intelligence").value = intelligence;
}

function boxShadow(nameCharacter) {
    document.getElementById("knight").style.boxShadow = "0px 0px 0px black";
    document.getElementById("berserker").style.boxShadow = "0px 0px 0px black";
    document.getElementById("mage").style.boxShadow = "0px 0px 0px black";
    document.getElementById("paladin").style.boxShadow = "0px 0px 0px black";
    if (nameCharacter != null) {
        document.getElementById(nameCharacter).style.boxShadow = "5px 5px 10px black";

    }
}

function selectHero(nameCharacter) {
    var arrCH = new Object();
    arrCH["knight"] = [60, 55, 40, 45, 50];
    arrCH["berserker"] = [70, 30, 65, 60, 25];
    arrCH["mage"] = [55, 30, 40, 45, 80];
    arrCH["paladin"] = [80, 70, 50, 20, 30];
    selectValuesHero(arrCH[nameCharacter][0], arrCH[nameCharacter][1], arrCH[nameCharacter][2], arrCH[nameCharacter][3], arrCH[nameCharacter][4]);
    boxShadow(nameCharacter);
    showStats(nameCharacter);
}

function toArena() {
    toBackground("characterBlock");
    toBackground("characterStats");
}