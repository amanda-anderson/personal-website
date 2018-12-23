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

    if (e.currentTarget.id == 3) {
        jQuery('#latestJob').focus();
    }
});

// Function to display job description on button click
function displayJobDesc(btnID, title, date, company) {
    document.getElementById("selected-job-title").innerHTML = title;
    document.getElementById("date-worked").innerHTML = date;
    document.getElementById("company-name").innerHTML = company;

    if (btnID == 1) {
        document.getElementById("job-desc-points").innerHTML = '<li>Job Point 1</li>';
    }

    if (btnID == 2) {
        document.getElementById("job-desc-points").innerHTML = '<li>Job Point 2</li>';
    }
  }

  // Set latest job as default display in Experience
jQuery(function(){
    jQuery('#latestJob').click();
 });