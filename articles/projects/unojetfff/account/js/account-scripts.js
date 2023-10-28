/* applications-map open */
var mas = document.querySelectorAll('.flight-card__button-more');

mas.forEach(button => button.onclick = function() {
        this.classList.toggle('open');
});
    
/* account-tabs */
var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}

/*datepicker*/
$(function() {
  $('.single-datepicker').daterangepicker({
    singleDatePicker: true,
    autoUpdateInput: false,
    showDropdowns: true,
    autoApply: false,
    locale: {
      format: 'DD.MM.YYYY'
  }
  }, function(start) {    

    $('.single-datepicker').on('apply.daterangepicker', function() {
      $(this).val(start.format('DD.MM.YYYY'));

  });
  });


  $('.single-datepicker-time').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    autoUpdateInput: false,
    showDropdowns: true,
    autoApply: false,
    locale: {
      format: 'DD.MM.YYYY hh:mm A'
  }
  }, function(start) {    

    $('.single-datepicker-time').on('apply.daterangepicker', function() {
      $(this).val(start.format('DD.MM.YYYY hh:mm A'));

  });
});

});