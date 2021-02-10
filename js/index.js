// Your code goes here
const homeNav = document.querySelectorAll('nav a')
const logoHead = document.querySelector('.logo-heading h1')
const funBus = document.querySelector('.intro img')


// logoHead.addEventListener('dblclick', sizeUp)
homeNav[0].addEventListener('click', colorChanger)
homeNav[1].addEventListener('click', colorChanger)
homeNav[2].addEventListener('click', colorChanger)
homeNav[3].addEventListener('click', colorChanger)
homeNav[0].addEventListener('mouseover', aColorChanger)
homeNav[1].addEventListener('mouseover', aColorChanger)
homeNav[2].addEventListener('mouseover', aColorChanger)
homeNav[3].addEventListener('mouseover', aColorChanger)
funBus.addEventListener('dblclick', sizeUp)
document.addEventListener('keydown', boldText)

function sizeUp(event){
    document.documentElement.style.fontStyle = "italic";
}
function colorChanger(event) {
    document.documentElement.style.backgroundColor = 'tan'
    event.stopImmediatePropogation()
    }
function aColorChanger(event){
    document.documentElement.style.backgroundColor = 'black'
}
document.addEventListener("keydown", function (event){
    if(event.key === "Escape"){
        document.documentElement.style.fontWeight = "bold";
    }
});