<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="slidecontainer">
<audio id="myAudio">
  <source src="muziek.mp3" type="audio/mpeg">
</audio>
  <input id="slider" onclick="volumeslide()" type="range" min="0" max="100" value="50">
  <br><span id="blok"></span>
  <button onclick="playAudio()" type="button">Play Audio</button>
  <button onclick="pauseAudio()" type="button">Pause Audio</button> 
</div>
<script src='Javascript/muziektest.js'></script>
</body>
</html>
