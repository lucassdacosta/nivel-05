import * as timer from './timer.js'
import * as sounds from './sounds.js'
import state from './state.js'
import * as el from './elements.js'

//CONTROL BUTTONS
const btnPlay = document.querySelector('.ph-play-circle')
const btnPause = document.querySelector('.ph-pause-circle')
const btnSet = document.querySelector('.ph-timer')
const btnReset = document.querySelector('.ph-stop-circle')
const btnPlus = document.querySelector('.ph-plus-circle')
const btnMinus = document.querySelector('.ph-minus-circle')

btnPlay.addEventListener('click', start)
btnPause.addEventListener('click', pause)
btnSet.addEventListener('click', set)
btnReset.addEventListener('click', reset)
btnPlus.addEventListener('click', add)
btnMinus.addEventListener('click', remove)


export function start(){
    sounds.btnPress.play()
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function pause(){
    sounds.btnPress.play()
    state.isRunning = document.documentElement.classList.remove('running')
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.addEventListener('focus', () =>{
        el.minutes.textContent = ""
        el.minutes.onkeypress = (event) => /\d/.test(event.key)
    })

    el.minutes.addEventListener('blur', () =>{
        let time = el.minutes.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        timer.updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.btnPress()
}

export function add(){
    sounds.btnPress.play()
    state.minutes += 5
    if(state.minutes > 60){
        state.minutes = 60
        return
    }
    
    timer.updateDisplay()
}

export function remove(){
    sounds.btnPress.play()
    state.minutes -= 5
    if(state.minutes < 0){
        state.minutes = 0
        return
    }

    timer.updateDisplay()
}

//BACKGROUND SOUNDS
const btnForest = document.querySelector('.ph-tree')
const btnRain = document.querySelector('.ph-cloud-rain')
const btnCoffeeShop = document.querySelector('.ph-storefront')
const btnFireplace = document.querySelector('.ph-fire')

btnForest.addEventListener('click', () => {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if(state.isMute){
        sounds.forest.play()
        return
    }

    sounds.forest.pause()
})

btnRain.addEventListener('click', () => {
    state.isMute = document.documentElement.classList.toggle('music-on2')
    if(state.isMute){
        sounds.rain.play()
        return
    }

    sounds.rain.pause()
})

btnCoffeeShop.addEventListener('click', () => {
    state.isMute = document.documentElement.classList.toggle('music-on3')
    if(state.isMute){
        sounds.coffeeShop.play()
        return
    }
    sounds.coffeeShop.pause()
})

btnFireplace.addEventListener('click', () => {
    state.isMute = document.documentElement.classList.toggle('music-on4')
    if(state.isMute){
        sounds.fireplace.play()
        return
    }
    sounds.fireplace.pause()
})
