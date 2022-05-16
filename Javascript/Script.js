function toBackground(i) {
    document.getElementById(i).style.opacity = "0";
    document.getElementById(i).style.zIndex = "-1";
}

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
    toForeground("characterStats")
    document.getElementById("characterName").innerText = nameCharacter;
}

function selectHero(health, armor, strength, speed, intelligence) {
    document.getElementById("health").value = health;
    document.getElementById("armor").value = armor;
    document.getElementById("strength").value = strength;
    document.getElementById("speed").value = speed;
    document.getElementById("intelligence").value = intelligence;
}

function boxShadow(nameCharacter) {
    character = ["knight", "berserker", "mage", "paladin"]
    for (let i = 0; i < character.length; i++) {
        document.getElementById(character[i]).style.boxShadow = "0px 0px 0px black";
    }
    if (nameCharacter != null) {
        document.getElementById(nameCharacter).style.boxShadow = "5px 5px 10px black";
    }
}

function selectKnight() {
    selectHero(60, 55, 40, 45, 50)
    showStats("Knight");
    boxShadow("knight");
}

function selectBerserker() {
    selectHero(70, 30, 65, 60, 25)
    showStats("Berserker");
    boxShadow("berserker");

}

function selectMage() {
    selectHero(55, 30, 40, 45, 80)
    showStats("Mage");
    boxShadow("mage");
}

function selectPaladin() {
    selectHero(80, 70, 50, 20, 30)
    showStats("Paladin");
    boxShadow("paladin");
}