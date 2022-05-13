function toselectCH() {
    document.getElementById("buttonBlock").style.opacity = "0";
    document.getElementById("buttonBlock").style.zIndex = "-1";
    document.getElementById("characterBlock").style.opacity = "1"
    document.getElementById("characterBlock").style.zIndex = "1";
}

function tomainscreen() {
    document.getElementById("buttonBlock").style.opacity = "1";
    document.getElementById("buttonBlock").style.zIndex = "1";
    document.getElementById("characterBlock").style.opacity = "0"
    document.getElementById("characterBlock").style.zIndex = "-1";
}

function showstats() {
    document.getElementById("characterstats").style.opacity = "1";
    document.getElementById("characterstats").style.zIndex = "1";
}

function selectHero(health, armor, strength, speed, intelligence) {
    document.getElementById("health").value = health;
    document.getElementById("armor").value = armor;
    document.getElementById("strength").value = strength;
    document.getElementById("speed").value = speed;
    document.getElementById("intelligence").value = intelligence;
}

function selectKnight() {
    showstats();
    selectHero(60, 55, 40, 45, 50)
}

function selectBerserker() {
    selectHero(70, 30, 65, 60, 25)
    showstats();
}

function selectMage() {
    selectHero(55, 30, 40, 45, 80)
    showstats();
}

function selectPaladin() {
    selectHero(80, 70, 50, 20, 30)
    showstats();
}