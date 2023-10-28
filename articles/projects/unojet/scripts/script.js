/* header animation */

var header = document.querySelector('.header');
var scrollPrev = 0;

function func() {
    scrollPos = window.scrollY;
    
    if ( scrollPos > 50 && scrollPos > scrollPrev ) {
        header.classList.add('header-hidden');
    }

    else {
        header.classList.remove('header-hidden');
    }

    if ( scrollPos > 0 ) {
        header.style.backgroundColor = '#ffffff';
    }
    else {
        header.style.backgroundColor = 'transparent';
    }



    scrollPrev = scrollPos;
}

window.addEventListener('scroll', func );

func();


/* search input anim*/
document.querySelector('.header-search').onclick = function() {
    document.querySelector('.header-menu').classList.add ('transparent');

    setTimeout( () => {
        document.addEventListener('click', function checkSearch(e) {

            if (!e.target.classList.contains ('header-search')) {
                document.querySelector('.header-menu').classList.remove ('transparent');
            }

            document.removeEventListener ('click', checkSearch);
        })
    }, 200);
}


/* input animation */
var transInputs = document.querySelectorAll('.input-transform input');

transInputs.forEach( input => input.onclick = function() {
    this.parentElement.classList.add('transformed');
});

document.addEventListener('click', function(e) {
    transMas = document.querySelectorAll('.transformed');
    
        if(transMas.length > 0 && !e.target.matches('.daterangepicker *, .available, .available span')) {
            transMas.forEach ( input2 => {
                    var inputFields = input2.getElementsByTagName('input');
                    if (inputFields[0] == document.activeElement || inputFields[0].value != '' || (inputFields.length > 1 && inputFields[1].value != '')) {
                        return;
                    }
                    input2.classList.remove('transformed');
                });
                
        }
    }  
);
function checkInput() {
    var code = this.nextElementSibling;
    code.value = "";
    code.nextElementSibling.innerHTML = "";
    var filter = this.value.toUpperCase();
    var list = document.getElementById(this.getAttribute('data-values'));
    var items = list.getElementsByTagName('li');
    if (filter === '') {
        list.parentElement.style.display = "none";
        return;
    }
    var count = 0;
    for (i = 0; i < items.length; i++) {
        var itemText = items[i].textContent;
        if (itemText.toUpperCase().indexOf(filter) > -1) {
            count++;
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
    list.parentElement.style.display = count > 0 ? "block" : "";    
}

var input = document.querySelectorAll('input[class*="input--places-"]');
input.forEach(field => {
    field.onkeyup = checkInput;
    field.input = checkInput;
    field.addEventListener("focusout", function(e) {
        
        setTimeout(function() {
            var code = e.target.nextElementSibling;
            if (code.value !== '') return;
            var list = document.getElementById(e.target.getAttribute('data-values'));
            list.parentElement.style.display = "";
            e.target.value = '';
        }, 100);
        
    });
});
var items = document.querySelectorAll('.places li');
items.forEach(item => item.onclick = function() {
    this.parentElement.parentElement.style.display = "";
    var selected = this.parentElement.parentElement.previousElementSibling;
    selected.innerHTML = this.innerHTML;
    var input = selected.previousElementSibling;
    input.value = this.getAttribute("value");
    var search = input.previousElementSibling;
    search.value = '';
});

const slider = document.querySelector('.form-aircraft-style');
let isDown = false;
let startX;
let scrollLeft;
if (slider != undefined) {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
}
