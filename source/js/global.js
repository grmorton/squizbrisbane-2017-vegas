'use strict';

//  Declare JS Enabled.
$('body').removeClass('no-js').addClass('js-enabled');


function shuffle(array) {
    var i = array.length,
        j, r;
    while (0 !== i) {
        r = Math.floor(Math.random() * i);
        i -= 1;
        j = array[i];
        array[i] = array[r];
        array[r] = j;
    }
    return array;
}

/*
--------------------
Globals for modules - declared here if recycled across modules,else see specific module
--------------------
*/

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('i.fa')
        .toggleClass('fa-chevron-down fa-chevron-up');
}
$('.accordion-list, .accordion-content').on('hidden.bs.collapse', toggleChevron);
$('.accordion-list, .accordion-content').on('shown.bs.collapse', toggleChevron);


//Global menu search slider
$(document).on("click", ".btn-slider-form", function() {
    //give input focus over nav buttons
    $(".slider-form-outer").css("z-index", "100");
    //toggle button icons
    $(this).find("img").toggleClass("hidden");
    $(this).find(".fa").toggleClass("hidden");
    //slide in/out via css
    $(".slider-form-inner").toggleClass("slide-show slide-hide");
    if ($(".slider-form-inner").hasClass("slide-hide")) $(".slider-form-outer").css("z-index", "-10"); //remove focus if hiding
});


//Pop open main mega menu on hover. Retail click events for touch devices
// $('.dropdown').hover(function(){
//   if ($(window).width() > 992) $('.dropdown-toggle', this).trigger('click');
// });
$('.navbar [data-toggle="dropdown"]').bootstrapDropdownHover({
  clickBehavior: 'sticky'
});


//show/hide page modal during menu drop down viewing
$(".dropdown").on("hide.bs.dropdown", function() {
    $("#modal_menu_overlay").hide();
});
$(window).resize(function(){
    $("#modal_menu_overlay").hide(); //in case the menu isnt closed and window is resized
})
$(".dropdown").on("show.bs.dropdown", function() {
    $("#modal_menu_overlay").show();
});
