function toselectCH() {
    document.getElementById("Buttonblock").style.opacity = "0";
    document.getElementById("Buttonblock").style.zIndex = "-1";
    document.getElementById("Characterblock").style.opacity = "1.0"
    document.getElementById("Characterblock").style.zIndex = "1";
}
function tomainscreen() {
    document.getElementById("Buttonblock").style.opacity = "1.0";
    document.getElementById("Buttonblock").style.zIndex = "1";
    document.getElementById("Characterblock").style.opacity = "0"
    document.getElementById("Characterblock").style.zIndex = "-1";
} 