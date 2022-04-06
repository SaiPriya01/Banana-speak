var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector(".output");
// var action = document.getElementById("action");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function textToAudio(msg) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
btnTranslate.addEventListener("click", clickHandler);
function clickHandler() {
    recognition.start();
    console.log('start speech');
    recognition.speechend = () => {
        recognition.stop();
        console.lof('speech end')
    }
    recognition.onresult = function (event) {
        var transcriptInput = event.results[0][0].transcript;
        txtInput.innerText = transcriptInput;
        console.log(event.results[0][0]);
        console.log(txtInput.value)
function getTranslation(Txt) {
    return serverURL + "?text=" + Txt;
}

var translatedText = () => {
    var Input = transcriptInput;
    fetch(getTranslation(Input))
        .then(response => response.json())
        .then(json => {
            let outputText=json.contents.translated;
            outputDiv.innerText = outputText;
            textToAudio(outputText);
        })
}
translatedText();
}
}
