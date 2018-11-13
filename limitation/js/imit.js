'use strict'

const textarea = document.querySelector('.textarea');
const block = document.querySelector('.block');
const message = document.querySelector('.message');

function focusIn() {

    block.classList.add('active')
}


function focusOut(event) {
    block.classList.remove('active')
    if (message.classList.contains('view')) {
        message.classList.remove('view')
    }
    return event
}


function addMessage(callback, delay) {
    let timeout;
    return () => {
        focusIn()
        message.classList.remove('view')
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (block.classList.contains('active')) {
                message.classList.add('view')
            }
            timeout = null;
            callback();
        }, delay);
    };
};


textarea.addEventListener('focus', focusIn)

textarea.addEventListener('focusout', focusOut)

textarea.addEventListener('input', addMessage(() => {
    block.classList.remove('active');
}, 2000));
