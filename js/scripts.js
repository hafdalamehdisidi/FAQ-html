let clickOne = document.getElementById('item-1');
let clickTwo = document.getElementById('item-2');
let clickThree = document.getElementById('item-3');
let clickFour= document.getElementById('item-4');
let clickFive = document.getElementById('item-5');

clickOne.onclick = function move() {
    window.location.href='#End';
}
clickTwo.onclick = function move() {
    window.location.href='#html';
}
clickThree.onclick = function move() {
    window.location.href='#css';
}
clickFour.onclick = function move() {
    window.location.href='#js';
}
clickFive.onclick = function move() {
    window.location.href='#backEnd';
}