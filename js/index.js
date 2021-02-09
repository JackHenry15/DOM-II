// Your code goes here
const homeNav = document.querySelectorAll('nav a')

homeNav[0].addEventListener('click', colorChanger)
homeNav[1].addEventListener('click', colorChanger)
homeNav[2].addEventListener('click', colorChanger)
homeNav[3].addEventListener('click', colorChanger)
homeNav[0].addEventListener('mouseover', aColorChanger)
homeNav[1].addEventListener('mouseover', aColorChanger)
homeNav[2].addEventListener('mouseover', aColorChanger)
homeNav[3].addEventListener('mouseover', aColorChanger)

function colorChanger(event) {
    for (i = Math.random(0, 3); i < 5;)
    if (i = 0){
    document.documentElement.style.backgroundColor = 'tan'
    event.stopImmediatePropogation()
    }else if (i = 1){
        document.documentElement.style.backgroundColor = 'brown'
        event.stopImmediatePropogation()
    }else if (i = 2){
        document.documentElement.style.backgroundColor = 'yellow'
        event.stopImmediatePropogation()
    }else if (i = 3){
        document.documentElement.style.backgroundColor = 'blue'
        event.stopImmediatePropogation()
    }
}
function aColorChanger(event){
    document.homeNav.style.backgroundColor = 'black'
}