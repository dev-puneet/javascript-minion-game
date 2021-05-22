'use strict';
const button= document.querySelector('#btn-primary');
const textArea = document.querySelector('textarea')
const outputArea= document.querySelector('.output');
button.addEventListener('click', function(){
        outputArea.textContent=textArea.value;
})