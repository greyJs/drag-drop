'use strict'


const leftEye = document.querySelector('.cat_position_for_left_eye');
const rightEye = document.querySelector('.cat_position_for_right_eye');

let posX = null,
    posY = null;

function moveCatEye(eye, posX, posY) {

    const catEye = eye.querySelector('.cat_eye');

    if (posX < eye.getBoundingClientRect().left) {
        catEye.style.left = `${0}%`
    }
    if (posX > eye.getBoundingClientRect().right) {
        catEye.style.left = `${50}%`
    }
    if (eye.getBoundingClientRect().left < posX && posX < eye.getBoundingClientRect().right) {
        catEye.style.left = `${25}%`
    }
    if (posY < eye.getBoundingClientRect().top) {
        catEye.style.top = `${0}%`
    }
    if (posY > eye.getBoundingClientRect().bottom) {
        catEye.style.top = `${50}%`
    }
    if (eye.getBoundingClientRect().top < posY && posY < eye.getBoundingClientRect().bottom) {
        catEye.style.top = `${25}%`
    }

}


document.addEventListener('mousemove', event => {
    posX = event.pageX;
    posY = event.pageY;
    moveCatEye(leftEye, posX, posY);
    moveCatEye(rightEye, posX, posY);

})
