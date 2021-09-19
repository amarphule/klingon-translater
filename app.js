var button = document.querySelector('.btn-translate')
var textInput = document.querySelector('#input-text')
var textOutput = document.querySelector('.output')
var serverUrl = "https://api.funtranslations.com/translate/klingon.json"


button.addEventListener("click", () => {
    var url = serverUrl + "?text=" + textInput.value
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            textOutput.innerHTML = translatedText
        })
        .catch(e => {
            alert("Something wrong plese try again...")
        })
})