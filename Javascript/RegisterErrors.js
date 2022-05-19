//FUNCTIONS
var $ = function (elementID) {

    return document.getElementById(elementID);

}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function spanEmpty() {
    $("usernameError").innerHTML = "";
    $("passwordError").innerHTML = "";
    $("emailError").innerHTML = "";
    $("passwordMatchError").innerHTML = "";
    $("emailError").innerHTML = "";
}
function Check() {
    // SET VALIDATION TRUE
    var validatie = true;
    // UNSET SPAN FIELDS
    spanEmpty();
    // IF EMPTY
    if ($("username").value == "") {
        $("usernameError").innerHTML = "Gebruikersnaam niet ingevuld";
        validatie = false;
    }
    if ($("password").value == "") {
        $("passwordError").innerHTML = "Wachtwoord niet ingevuld";
        validatie = false;
    }
    if ($("E-mail").value == "") {
        $("emailError").innerHTML = "E-mail niet ingevuld";
        validatie = false;
    }
    // IF MATCHING
    if ($("password").value !== $("password2").value) {
        $("passwordMatchError").innerHTML = "Wachtwoord is niet het zelfde";
        validatie = false;
    }
    // EMAIL VALIDATION
    if (!validateEmail($("E-mail").value)) {
        $("emailError").innerHTML = "E-mail ongeldig";
        validatie = false;
    }
    // VALIDATIE CHECK
    if (validatie == true) {
        $("registerButton").submit();
    }
}