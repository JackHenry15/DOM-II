// Your code goes here
const homeNav = document.querySelectorAll('nav a')
const logoHead = document.querySelector('.logo-heading h1')
const funBus = document.querySelector('.intro img')
const theBoat = document.querySelector('img')
const container = document.querySelector('div.container')


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
funBus.addEventListener('mouseout', function(event){
    document.documentElement.style.backgroundColor = "teal";
})
document.addEventListener('mouseleave', function(event){
    document.documentElement.style.backgroundColor = "purple";
})

document.addEventListener('wheel', function(event){
    theBoat.src = "https://www.amny.com/wp-content/uploads/2020/04/2020-04-08T204704Z_1_LYNXNPEG370MQ_RTROPTP_4_HEALTH-CORONAVIRUS-SESAME-STREET-753x1024.jpg";
});

container.addEventListener('mouseenter', function(event){
        container.style.backgroundColor = 'green';
})

document.addEventListener('contextmenu', e => {
    e.preventDefault();

})