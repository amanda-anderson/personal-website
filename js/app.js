// Fade in main section elements on page load
$('nav').first().delay(250).animate({'opacity':'1'},1000);
$('#intro-line1').last().delay(650).animate({'opacity':'1'},800);
$('#intro-line2').delay(650).animate({'opacity':'1'},800);
$('#intro-line3').delay(650).animate({'opacity':'1'},800);
$('.social-icon').delay(1200).animate({'marginTop':'+=-400px','opacity':'1'},600);

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
    
    if (btnID == 0) {
        description = '<li>Maintenance and development of Carmenta Map Builder product and Carmenta Engine Geospatial SDK (C++)</li>';
        description += '<li>Implemented support for 3D map packaging in Map Builder</li>';
        description += '<li>API refactoring and migration handling at runtime</li>';
        description += '<li>Testing and troubleshooting on Windows, Linux and Android platforms</li>';
        description += '<li>Automated and manual test development</li>';
        description += '<li>.NET, C#, MVVM Architecture, NUnit</li>';
        description += '\n';
        description += '<li style="margin-top:20px;">MSc Thesis Project (01/2021 - 07/2021) on the topic of multi-objective optimization. Published online on <a href=" http://hdl.handle.net/2077/69356">GUPEA</a>.</li>';
        
        document.getElementById("job-desc-points").innerHTML = description;
    }

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

 // Modal popup for portfolio

 function displayModal(id) {

    var modal = document.getElementById('portModal');
    var btn = document.getElementById(id);
    var span = document.getElementsByClassName("close")[0];
    var keyWords = "";
    var mainText = "";
    var gitLink = "";
    var extLink = "";

     if (id == "webgl") {
         document.getElementById("project-title").innerHTML = "WebGL Demo Projects";
         mainText = "A collection of introductory WebGL graphics projects completed as coursework (designed for desktop):"
                    + '<br><br><a href="http://turing.algomau.ca/~aanderson/3306_Graphics/Assignment2/assignment2.html">2D Drawing</a>'
                    + '<br><a href="http://turing.algomau.ca/~aanderson/3306_Graphics/Assignment4/A4_aanderson.html">2D Animation</a>'
                    + '<br><a href="http://turing.algomau.ca/~aanderson/3306_Graphics/Assignment3/Clipping_aanderson.html">Line Clipping Algorithms</a>'
                    + '<br><a href="http://turing.algomau.ca/~aanderson/Activity11/aanderson_A5.html">3D Shapes</a>'
                    + '<br><a href="http://turing.algomau.ca/~aanderson/A6/imageFilters.html">Image Filtering</a>'
                    + '<br><a href="http://turing.algomau.ca/~aanderson/FinalProject/aanderson_Final.html">Final Project: 3D Aquarium Simulator</a>';
         keyWords = "WebGL, JavaScript";
         gitLink = "https://github.com/amanda-anderson/webgl-projects";
         extLink = "http://turing.algomau.ca/~aanderson/";
     }

    if (id == "tra"){
        document.getElementById("project-title").innerHTML= "TRA Website Design";
        mainText = "Our team created the winning website design for Therapeutic Ride Algoma, a local not-for-profit organization in Sault Ste Marie, Canada. Given the nature of TRA, we wanted to create a website that was simple to navigate and fully accessible for those with visual or motor skill impairment. The competition consisted of an 8-week website development bootcamp working with Jeff Greco, CEO of Cavera Inc.";
        keyWords = "WordPress, UI/UX Design, Accessibility";
        gitLink = "https://github.com/amanda-anderson";
        extLink = "https://TRAlgoma.org";
    }

    if (id == "news-collective"){
        document.getElementById("project-title").innerHTML= "News Collective";
        mainText = "Single-page web app for viewing breaking news stories from multiple publishers. Using NewsAPI creates a simpler and more efficient way to keep up-to-date on world news and is updated in real-time.";
        keyWords = "HTML/CSS, Ajax, NewsAPI";
        gitLink = "https://github.com/amanda-anderson/News-Collective";
        extLink = "https://amanda-anderson.github.io/news-collective/";
    }

    if (id == "isles-dunya"){
        document.getElementById("project-title").innerHTML= "Isles of Dunya";
        mainText = "A personal game project with the goal of creating a challenging and fun 3D platformer with low poly models and smooth game physics. In the Isles of Dunya, the player must help the character collect special flowers to unlock passage to the next level. The player must maneuver through a variety of tricky obstacles without falling off.";
        keyWords = "Unity 3D, C#";
        gitLink = "https://github.com/amanda-anderson/isles-of-dunya";
        extLink = "https://www.youtube.com/watch?v=DTBmSJ3MSu8";
    }

    if (id == "spooky-soo"){
        document.getElementById("project-title").innerHTML= "Spooky Soo";
        mainText = "A Halloween-themed interactive web map showcasing Sault Ste Marie's most spooky locations. Do you have a location that should be included? Send me an email via the contact page!";
        keyWords = "Leaflet.js, HTML/CSS";
        gitLink = "https://github.com/amanda-anderson/spooky-soo";
        extLink = "https://amanda-anderson.github.io/spooky-soo/";
    }

    if (id == "leaf-lad"){
        document.getElementById("project-title").innerHTML= "Leaf Lad: Polluted Lands";
        mainText = "A 2D platformer prototype built in 48 hours for Global Game Jam 2019. The theme for this year was 'What home means to you'. <br><br> Humanity has cluttered our planet with litter and smoke. Join Leaf Lad on his quest to defeat pollution monsters and save Planet Earth - the only home we have!";
        keyWords = "Unity 3D, C#";
        gitLink = "https://github.com/amanda-anderson/";
        extLink = "https://amanderson.itch.io/leaf-lad-polluted-lands";
    }

    document.getElementById("project-main-text").innerHTML = mainText;
    document.getElementById("project-key-words").innerHTML = keyWords;
    document.getElementById("port-git-link").href = gitLink;
    document.getElementById("port-ext-link").href = extLink;

        modal.style.display = "block";
        $("#portModal").hide();
        $("#portModal").fadeIn();

    span.onclick = function() { 
        $("#portModal").fadeOut();
    }
    
    window.onclick = function(event) {
      if (event.target == modal) { 
            $("#portModal").fadeOut();
        }
    }
 }
