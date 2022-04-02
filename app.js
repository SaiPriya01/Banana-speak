var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");
// outputDiv.innerText="Sai Priya"
// console.log(txtInput);
// console.log(btnTranslate);
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function getTranslationURL(text){
    return serverURL+"? text=" +text
}
function clickEventHandler() {
    // console.log("Clicked");
    // console.log("input", txtInput.value);
    var inputTxt=txtInput;
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
};
// clickEventHandler is Callback function
btnTranslate.addEventListener("click", clickEventHandler);
