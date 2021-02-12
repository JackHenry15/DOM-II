// Your code goes here
const homeNav = document.querySelectorAll('nav a')
const logoHead = document.querySelector('.logo-heading h1')
const funBus = document.querySelector('.intro img')
const theBoat = document.querySelector('img')
const container = document.querySelector('div.container')
const textFun = document.querySelector('text-content')
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');


homeNav[0].addEventListener('click', colorChanger)
homeNav[1].addEventListener('click', colorChanger)
homeNav[2].addEventListener('click', colorChanger)
homeNav[3].addEventListener('click', colorChanger)
homeNav[0].addEventListener('mouseover', aColorChanger)
homeNav[1].addEventListener('mouseover', aColorChanger)
homeNav[2].addEventListener('mouseover', aColorChanger)
homeNav[3].addEventListener('mouseover', aColorChanger)
funBus.addEventListener('dblclick', italiC)
theBoat.addEventListener('drag', dragEd)


function dragEd(event){
    document.documentElement.style.backgroundColor= 'black';
}
function italiC(event){
    document.documentElement.style.fontStyle = "italic";
}
function colorChanger(event) {
    container.style.backgroundColor = 'tan'
    event.stopImmediatePropogation()
    }
function aColorChanger(event){
    document.documentElement.style.backgroundColor = 'blue'
}
document.addEventListener("keydown", function (event){
    if(event.key === "Escape"){
        return document.documentElement.style.backgroundColor = "red";;
    }
});
window.addEventListener('resize', function(event){
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
});
