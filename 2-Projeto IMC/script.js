//variaveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.close')

form.onsubmit = event => {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message =  `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}
//arrow function
modalBtnClose.onclick = () => modalWrapper.classList.remove('open')


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}