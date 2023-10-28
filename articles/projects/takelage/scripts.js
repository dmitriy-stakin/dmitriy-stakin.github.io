// функционал попапов

var ppBtns = document.querySelectorAll('.open-popup')
var closeBtns = document.querySelectorAll('.popup__close')
var popup

ppBtns.forEach( button => {
    button.onclick = () => {

        if (button.classList.contains('recall-popup__btn')) {
            popup = document.querySelector('.recall-popup')
            popup.classList.add('popup-active')
        }
        else if (button.classList.contains('calculation-popup__btn')){
            popup = document.querySelector('.calculation-popup')
            popup.classList.add('popup-active')
        }
        
    }
})

closeBtns.forEach( button => {
    button.onclick = () => {
        popup.classList.remove('popup-active')
    }
})



// функционал моб. меню

var openBtn
document.querySelectorAll('.custom-header .menu-item-has-children').forEach (item => {
    openBtn = document.createElement('span')
    openBtn.innerHTML = "<object data='assets/icons/chevron.svg' width='25' height='25' > </object>";
    openBtn.classList.add('open-submenu')
    item.insertBefore(openBtn, item.querySelector('.sub-menu'))   
})

document.querySelector('.burger').onclick = () => {
    document.querySelector('body').style.overflowY = 'hidden';
}

document.querySelector('.menu-close').onclick = () => {
    document.querySelector('body').style.overflowY = 'initial';
}

document.querySelectorAll('.open-submenu').forEach( button => {
    button.onclick = () => {
        button.nextElementSibling.classList.toggle('active')
        button.classList.toggle('active')
    }
}) 


/* поведение хедера при скролле */

var header = document.querySelector('.custom-header');
var mobMenu = document.querySelector('.side-menu')
var scrollPrev = 0;

function func() {
    scrollPos = window.scrollY;
    
    if ( scrollPos > 50 && scrollPos > scrollPrev && window.getComputedStyle(mobMenu).left !== "0px" ) {
        header.classList.add('header-hidden');
        mobMenu.style.top = header.offsetHeight + 'px';
    }

    else {
        header.classList.remove('header-hidden');
        mobMenu.style.top = '0';
    }

    if ( scrollPos > 0 ) {
        header.style.backgroundColor = '#3c3c3cd9';
    }
    else {
        header.style.backgroundColor = 'transparent';
        // revert-layer
    }



    scrollPrev = scrollPos;
}

window.addEventListener('scroll', func );

func();


jQuery(document).ready(function(){
    jQuery('.photos-wrapper').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


//faq-tabs
document.querySelectorAll('.faq-tab__heading').forEach( heading => heading.onclick = () => {
    heading.classList.toggle('opened')
} )