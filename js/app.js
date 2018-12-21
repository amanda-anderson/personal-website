// Scroll to section animation on nav click, lock nav link colour
$("a").click(function (e) {
    var i;
    for (i = 1; i < 6; i++) { $('#' + i).removeClass('active');}
   
    var btnId = "section"+e.currentTarget.id;
    var sectionLink = $(this);
    sectionLink.addClass('active');

    $('html, body').animate({
        scrollTop: $("#" + btnId).offset().top
    }, 1000);
});