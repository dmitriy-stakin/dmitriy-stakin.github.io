/*popup */
var ppOpenBtns = document.querySelectorAll('.popup-open');


ppOpenBtns.forEach( button => button.onclick = function() {
    document.querySelector('.popup-overlay').style.display = 'flex';
});

document.querySelector('.popup-overlay').onclick = function(e) {
    if (e.target.classList.contains ("popup__close")) {
        document.querySelector('.popup-overlay').style.display = "none";
    }
}