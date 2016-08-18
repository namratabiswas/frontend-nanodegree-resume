var bio = {
    "name": "Namrata Biswas",
    "role": "Front end Web Developer",
    "welcomeMessage": "I'm an aspiring Front-End Web Developer looking for awesome opportunities and I love coding!!",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "716-247-8238",
        "email": "namrata.itme@gmail.com",
        "github": "namratabiswas",
        "twitter": "@namratabiswas",
        "linkedin": "https://www.linkedin.com/in/jenniferfollero",
        "location": "San Jose, CA"
    },
    "skills": ["JavaScript", "HTML", "CSS", "jQuery", "bootstrap", "nodeJS"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills:last").append(formattedSkills);
    }
};
bio.display();

var work = {
    "jobs": [
        {
        "employer": "Voltas Limited",
        "title": "Engineer,Business Development",
        "location": "Kolkata,India",
        "dates": "January 2011 - December 2012",
        "description": "- Project timeline, cost, and execution management  - Project cost analysis in Matlab and Excel - Regular presentations to existing and potential clients .",
        "url": "http://www.voltaslimited.com/"
    },
    {
        "employer": "Mecon Limited",
        "title": "Environmental data Analyst",
        "location": "Ranchi,India",
        "dates": "July 2009 - July 2010",
        "description": "- Raw data collection and cleaning from air quality sensors - Collecting, monitoring, and analysis of waste water experimental results ",
        "url": "http://meconlimited.com/"
    }, 
    {
        "employer": "Jadavpur University",
        "title": "Research Assistant",
        "location": "Kolkata,India",
        "dates": "July 2008 - May 2009",
        "description": "Rigorous detailed oriented experiment for production of Silver nanoparticles from Silver Salt - Protein detection using spectrophotometer via DNS and Lowry procedure  ",
        "url": "http://jadavpuruniversity.org/"
    }
]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedEmployerLink = formattedEmployer.replace("#", work.jobs[i].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployerLink + formattedTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};
work.display();

var education = {
    "schools": [
        {
            "name": "West Bengal University of Technology",
            "location": "West Bengal,India",
            "degree": "B.Tech",
            "major": "Biotechnology",
            "dates": "July 2005-July 2009",
            "url": "https://www.wbut.org"
        }

    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "August 2016 - present",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Object Oriented Javascript",
            "school": "Udacity",
            "dates": "February 2016",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "January 2016",
            "url": "https://www.udacity.com"
        }, 
        {
            "title": "How to use Git and Github",
            "school": "Udacity",
            "dates": "December 2015",
            "url": "https://www.udacity.com"
        },
        {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": "November 2015",
        "url": "https://www.udacity.com"
        },
        {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "October 2015",
        "url": "https://www.udacity.com"
        },
        {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "September 2015",
        "url": "https://www.udacity.com"
        }
   ]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedNameLink = formattedName.replace("#", education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var educationSchools = formattedNameLink + formattedDegree + formattedDates + formattedLocation + formattedMajor;
        $(".education-entry:last").append(educationSchools);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedTitleLink = formattedTitle.replace("#", education.onlineCourses[i].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        var formattedURLLink = formattedURL.replace("#", education.onlineCourses[i].url);
        var educationOnline = formattedTitleLink + formattedSchool + formattedDates + formattedURLLink;
        $(".education-entry:last").append(educationOnline);
    }
};
education.display();

var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "August 2016",
            "description": "Online portfolio to showcase projects built",
            "url": "file:///C:/Users/Namrata/Desktop/Udacity%20Nanodegree/build_a_portfolio/index.html"
        },

        {
            "title": "Animal Trading Card",
            "dates": "June 2016",
            "description": "Udacity project to create an animal trading card using HTML and CSS",
            "url": "file:///C:/Users/Namrata/Desktop/Udacity%20Nanodegree/Animal%20Trading%20Cards/card.html"
        },

        {
            "title": "Bubble Bursting Game",
            "dates": "November 2015",
            "description": "Interactive bubble bursting game using HTML,CSS,Javascript",
            "url": "file:///C:/Users/Namrata/Downloads/bubble.html.html"
        }, 
        {
            "title": "Code Player",
            "dates": "November 2015",
            "description": "Similar to JS bin. Able to write HTML, CSS, and JS together and view the result and runs in the browser.",
            "url": "file:///C:/Users/Namrata/Downloads/jsbin.html.html"
        },
        {
            "title": "App Landing Page",
            "dates": "November 2015",
            "description": "Website where users can get information about your app and can download them.",
            "url": "file:///C:/Users/Namrata/Downloads/app_landing.html.html"
        }, 
        {
            "title": "Weather Scraper",
            "dates": "January 2016",
            "description": " Website that works through Ajax and uses PHP to get the page content of a weather website and returns the content of the weather info of the city that the user puts in.",
            "url": "file:///C:/Users/Namrata/Downloads/weather.html.html"
        },
    ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedTitleLink = formattedTitle.replace("#", projects.projects[i].url);
        $(".project-entry:last").append(formattedTitleLink);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedImage);
    }
};
projects.display();

$("#mapDiv").append(googleMap);

/*var footerContacts = {
    "social": {
        "github": "https://github.com/namratabiswas",
        "twitter": "https://twitter.com/namratabiswas",
        "linkedin": "https://www.linkedin.com/in/namrata-biswas-18501323"
    }
};

$("#footerContacts").append(HTMLfooterGithub.replace("#", footerContacts.social.github));
$("#footerContacts").append(HTMLfooterTwitter.replace("#", footerContacts.social.twitter));
$("#footerContacts").append(HTMLfooterLinkedin.replace("#", footerContacts.social.linkedin)); */

// $("#main").append(internationalizeButton);

// function inName(name) {
// 	name = bio.name.split(" ");
// 	lastName = name[1].toUpperCase();
// 	firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return firstName + " " + lastName;
// }
