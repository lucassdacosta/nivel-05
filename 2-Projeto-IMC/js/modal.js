export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

//arrow function
Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    if (event.key === 'Escape'){
        Modal.close()
    }
}