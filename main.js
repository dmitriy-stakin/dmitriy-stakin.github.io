// функционал попапов

var ppBtns = document.querySelectorAll('.open-popup')
var closeBtns = document.querySelectorAll('.popup__close')
var popup

ppBtns.forEach( button => {
    button.onclick = () => {

        if (button.classList.contains('open-popup')) {
            popup = document.querySelector('.popup__background')
            popup.classList.add('popup-active')
        }
        
    }
})

closeBtns.forEach( button => {
    button.onclick = () => {
        popup.classList.remove('popup-active')
    }
})