//FUNCTIONS
var $ = function (elementID) {

    return document.getElementById(elementID);

}
var x = document.getElementById("myAudio");
function volumeslide() {
    let volume = $("slider"); // SLIDER VALUE
    volumeNumber = volume.value / 100; // DELEN DOOR 100 WANT HIJ PAKT VALUES ONDER 1
    volume.onchange = $("blok").innerHTML = volume.value; // ZET DE TEXT NAAR VALUE NIET NODIG
    x.volume = volumeNumber; // VOLUME CHANGE
}
function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
}