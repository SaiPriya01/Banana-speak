var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(Txt) {
    return serverURL + "?text=" + Txt;
}
function clickHandler() {
    var inputTxt = txtInput.value;
    console.log(getTranslation(inputTxt))
    fetch(getTranslation(inputTxt))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
}
btnTranslate.addEventListener("click", clickHandler);
