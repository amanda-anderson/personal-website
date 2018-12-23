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

    $(".job-text").hide();

    document.getElementById("selected-job-title").innerHTML = title;
    document.getElementById("date-worked").innerHTML = date;
    document.getElementById("company-name").innerHTML = company;
    document.getElementById("job-desc-points").innerHTML = "";

    if (btnID == 1) {
        description = '<li>Recommend opportunities for test automation using SQL and Batch scripts to improve workflows</li>';
        description += '<li>Provide QA services across DOMO and GIS systems verifying alignment in data and accuracy</li>';
        description += '<li>Remote work environment using agile development methodologies (JIRA and Kanban)</li>';
        description += '<li>Develop document templates for test plans and set standards for QA testing</li>';
        description += '<li>Ensure top quality address level data for the Broadband Networks team</li>';
        description += '<li>QA network and address data to ensure they are enabled correctly in internal systems</li>';
        description += '<li>Coordinate with peers and key business stakeholders to problem solve solutions</li>';
        document.getElementById("job-desc-points").innerHTML = description;
    }

    if (btnID == 2) {
        description = '<li>Design and develop mobile applications for iOS and Android platforms from start to finish</li>';
        description += '<li>Development using Unity, Vuforia, Google Tango and C# for augmented reality applications</li>';
        description += '<li>3D modelling and visualization using TinkerCAD and Meshlab</li>';
        description += '<li>Professional consultations with clients to ensure that applications fully meet project requirements</li>';
        document.getElementById("job-desc-points").innerHTML = description;
    }

    if (btnID == 3) {
        description = '<li>Set up, program and calibrate dataloggers and meteorological instrumentation</li>';
        description += '<li>Develop web-based GIS app using ArcGIS Online</li>';
        description += '<li>Create province-wide nitrous oxide GIS model using georeferenced crop and soils data</li>';
        description += '<li>Modify MATLAB functions and run statistical analysis</li>';
        description += '<li>Assist in field experiments using lysimeters and micrometeorological methods</li>';
        document.getElementById("job-desc-points").innerHTML = description;
    }

    if (btnID == 4) {
        description = '<li>Use ArcGIS to display georeferenced Water and Wastewater datasets and perform spatial queries and analysis</li>';
        description += '<li>Use Python, VBA, and ArcPy to update the GIS with accurate watermain capital planning data</li>';
        description += '<li>Calculate asset replacement costs, remaining life of assets, and perform risk analysis</li>';
        description += '<li>Input, organize, and analyze data from site visits using asset management software created by the Region</li>';
        description += '<li>Involved in the development of Condition Assessment protocols within the Region\'s asset management group</li>';
        description += '<li>Nominated for the 2015 Co-op Student of the Year award for my work ethic and productivity</li>';
        document.getElementById("job-desc-points").innerHTML = description;
    }

    if (btnID == 5) {
        description = '<li>Review Site Plan and Rezoning applications and provide environmental conditions of approval</li>';
        description += '<li>Review and evaluate Environmental Site Assessments (Phase I and II), Site Remediation reports and Geotechnical reports and provide input to Municipal Servicing Agreements</li>';
        description += '<li>Conduct professional site visits to monitor spills and to enforce the Storm Sewer Use By-law</li>';
        description += '<li>Represent the Environmental Services Section at numerous public outreach events to educate citizens about stormwater and water quality</li>';
        document.getElementById("job-desc-points").innerHTML = description;
    }
    $(".job-text").fadeIn("slow");
  }

  // Set latest job as default display in Experience
jQuery(function(){
    jQuery('#latestJob').click();
 });