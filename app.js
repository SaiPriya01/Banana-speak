var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector(".output");
var action = document.getElementById("action");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function runSpeechRecognition(){
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function() {
                    action.innerHTML = "<small>listening, please speak...</small>";
                };
    recognition.onspeechend = function() {
                    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                    recognition.stop();
    }
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        txtInput.innerHTML = transcript;
        // txtInput.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();
}


// function getTranslation(Txt) {
//     return serverURL + "?text=" + Txt;
// }
// function clickHandler() {
//     var inputTxt = txtInput.value;
//     console.log(getTranslation(inputTxt))
//     fetch(getTranslation(inputTxt))
//         .then(response => response.json())
//         .then(json => {
//             outputDiv.innerText = json.contents.translated;
//         })
// }
// btnTranslate.addEventListener("click", clickHandler);
