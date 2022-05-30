//FUNCTIONS
var $ = function (elementID) {

    return document.getElementById(elementID);

}
function errormsg() {
    const getCookieValue = (name) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    )
    let errormsg = getCookieValue("error");
    error = errormsg.replace(/%20/g, ' ');
    $("loginError").innerHTML = error;
    document.cookie = "error" + '=; Max-Age=-99999999;';
}
errormsg();