var $ = function (elementID) {

    return document.getElementById(elementID);

}
var stage = 0;
//var stage = 0;
function stageUp() {
    stage++;
    console.log("Stage up je bent nu op Stage: ");
    console.log(stage);
    // Koekjes bakker
    let koek = "stage=" + stage + "; " + "domain=localhost";
    document.cookie = koek;
}