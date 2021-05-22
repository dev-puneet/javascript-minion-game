'use strict';

const button= document.querySelector('#btn-primary');
const textArea = document.querySelector('textarea')
const outputArea= document.querySelector('.output');

const serverUrl= "https://api.funtranslations.com/translate/minion.json";

const createURL = function(text){
        return serverUrl+ "?" + "text=" + text
};

const errorHandler= function(error){
        alert("something went wrong with the server");
}

const clickhandler = function(){
        var txtInput = textArea.value; //input
        //processing , callback function
        fetch(createURL(txtInput))
        .then(response=>response.json())
        .then(json=> {
                var translatedText=json.contents.translated;
                outputArea.innerText = translatedText; //output
        })
        .catch(errorHandler)
}

button.addEventListener('click', clickhandler);