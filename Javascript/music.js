
//Music and Soundeffects
var Music = $("mainMuziek");
//var Soundeffects = $("myAudio1");

//Volume change
function muziekVolume() {
    let volume = $("muziek"); // SLIDER VALUE
    volumeNumber = volume.value / 100; // DELEN DOOR 100 WANT HIJ PAKT VALUES ONDER 1
    volume.onchange = $("blok").innerHTML = volume.value; // ZET DE TEXT NAAR VALUE NIET NODIG
    Music.volume = volumeNumber; // VOLUME CHANGE
}
function effectslide() {
    let volume = $("slider"); // SLIDER VALUE
    volumeNumber = volume.value / 100; // DELEN DOOR 100 WANT HIJ PAKT VALUES ONDER 1
    volume.onchange = $("blok1").innerHTML = volume.value; // ZET DE TEXT NAAR VALUE NIET NODIG
    y.volume = volumeNumber; // VOLUME CHANGE
}
//Play and Stop audio
function playAudio() {
    Music.play();
    //Soundeffects.play();
}
function pauseAudio() {
    Music.pause();
    //Soundeffects.pause();
}