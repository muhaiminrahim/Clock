setInterval(setClock, 1000)

const hour = document.querySelector('[d-Hour]')
const minute = document.querySelector('[d-Minute]')
const second = document.querySelector('[d-Second]')

function setClock(){
    const D = new Date();
    const sRatio = D.getSeconds() / 60
    const mRatio = (sRatio + D.getMinutes()) / 60
    const hRatio = (mRatio + D.getHours()) / 12
    Rotation(second, sRatio)
    Rotation(minute, mRatio)
    Rotation(hour, hRatio)
}

function Rotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}

setClock()