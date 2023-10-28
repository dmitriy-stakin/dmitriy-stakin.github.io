/* pages where this script is needed: main-page, shuttle, empty-legs.
*
*  radio labels switcher */
document.querySelectorAll('.radio-label').forEach( label => label.onclick = function(label) {
    var elems = document.querySelectorAll(".radio-active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("radio-active");
      });
      label.target.classList.add("radio-active");
});


/* active page selection */
var lnk = document.getElementsByTagName('a');

for (var i= 0; i < lnk.length; i++)
    if (lnk[i].href == document.URL) {
        lnk[i].classList.add('active');
}


/*calendar*/
  $(function() {

    $('.datepicker-double').daterangepicker({
        autoUpdateInput: false,
        timePicker: true,
        autoApply: false,
        locale: {
          format: 'DD.MM.YYYY hh:mm A'
        }
    });
  
    $('.datepicker-double').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD.MM.YYYY hh:mm A') + ' - ' + picker.endDate.format('DD.MM.YYYY hh:mm A'));
    });
  
    $('.datepicker-double').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });

/* check which form via link */
if (window.location.href.indexOf('?costCalculator') > -1) {
  document.getElementById('cost-calc-tab').classList.add('active');
  document.querySelector('.page-title').innerHTML = 'Cost calculator';
  document.getElementById('calculation-form').classList.add('active');
}
else {
  if(document.getElementById('flight-request-tab')) {
    document.getElementById('flight-request-tab').classList.add('active');
    document.getElementById('flight-request-form').classList.add('active');
  }
}



/*  form tabs  */
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

tabNavs.forEach ( tab => tab.onclick = function() {
    var text = tab.innerHTML;

    if(document.querySelector('.page-title')){
      document.querySelector('.page-title').innerHTML = text;
    }
    else {
      return;
    }
    
  } );