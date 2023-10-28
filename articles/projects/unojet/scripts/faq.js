var acMas = document.querySelectorAll('.accordion-button');

    acMas.forEach( el => el.onclick = function() {

        if (el.classList.contains('accordion-active')) {
            el.classList.remove('accordion-active');
            return;
        }

        acMas.forEach( el1 => el1.classList.remove('accordion-active'));

        if (el.classList.contains('accordion-active')) {
            el.classList.remove('accordion-active');
        }
        else {
            el.classList.toggle('accordion-active');
        }

    });