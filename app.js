var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
console.log(txtInput);
// console.log(btnTranslate);
function clickEventHandler(){
    console.log("Clicked");
    console.log("input",txtInput.value);
};
// clickEventHandler is Callback function
btnTranslate.addEventListener("click", clickEventHandler())


