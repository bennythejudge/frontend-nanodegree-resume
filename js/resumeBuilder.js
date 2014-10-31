/*
 resumeBuilder.js
 contains the JSON with the data to publish
 and the display methods
by Benedetto Lo Giudice
*/

var work = {
  "jobs":  [
      {
      "employer": "International Bank",
      "title": "Unix engineer",
      "location": "London, UK",
      "dates": "2004 to current",
      "description": "Derivative trading support"
    },
    {
      "employer": "International BankG",
      "title": "Unix SA",
      "location": "Frankfurt, Germany",
      "dates": "2000 to 2004",
      "description": "AIX, Solaris and Linux sysadmin"
    },
    {
      "employer": "Dutch ISP",
      "title": "Unix SA",
      "location": "Amsterdam, Netherlands",
      "dates": "1998 to 2000",
      "description": "Supporting the ISP Unix systems"
    },
    {
      "employer": "Clearing House",
      "title": "Unix engineer",
      "location": "Luxembourg, Luxembourg",
      "dates": "1998 to 1998",
      "description": "Real-time settlement system"
    },
    {
      "employer": "Local bank",
      "title": "Unix SA",
      "location": "Florence, Italy",
      "dates": "1994 to 1998",
      "description": "Various projects"
    },
    {
      "employer": "Multiple clients and employers",
      "title": "Multiple roles",
      "location": "Perugia, Italy",
      "dates": "1990 to 1994",
      "description": "Multiple locations from Perugia to London"
    }
  ]
}

work.display = function () {
  $("#workExperience").append("<div id=\"work-foldable-content\"></div>");
    //console.log(work.jobs.length);
    for (var i=0;i<work.jobs.length;i++) {
      //console.log(work.jobs[i].employer);
      $("#work-foldable-content").append(HTMLworkStart);
      a=HTMLworkDates.replace("%data%",work.jobs[i].dates);
      $(".work-entry:last").append(a);
      a=HTMLworkLocation.replace("%data%",work.jobs[i].location);
      $(".work-entry:last").append(a);
      var a = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
      $(".work-entry:last").append(a);
      a=HTMLworkTitle.replace("%data%",work.jobs[i].title);
      $(".work-entry:last").append(a);
      a=HTMLworkDescription.replace("%data%",work.jobs[i].description);
      $(".work-entry:last").append(a);
    }  
}

/*
bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
*/
/* I have added a github link */
var bio = {
    "name": "Benedetto Lo Giudice",
    "role": "Front-End Developer Apprentice",
    "welcomeMessage": "",
    "contacts": {
        "mobile": "+xxxxxxxx",
        "email": "benedettologiudice@gmail.com",    
        "githublink": "https://github.com/bennythejudge",
        "github": "bennythejudge",
        "twitter": "@twitter",
        "location" : "London, UK, Europe",
        "linkedin": "https://www.linkedin.com/in/benedettologiudice"
    },
    "skills": [ "Solaris", "Linux", "Perl", "Python"],
    "bioPic": "images/myphoto01.jpg"
}

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var f_mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var f_photo = HTMLbioPic.replace("%data%",bio.bioPic)
  var github = HTMLgithub.replace("%data%","<a class=\"contacts-link\" href=\""+bio.contacts.githublink+"\" target=\"_blank\">"+bio.contacts.github+"</a>");
  var f_email = HTMLemail.replace("%data%","<a class=\"contacts-link\" href=\"mailto:"+bio.contacts.email+"\">"+bio.contacts.email+"</a>");
  var f_location = HTMLlocation.replace("%data%",bio.contacts.location);
  var f_linkedin = HTMLlinkedin.replace("%data%","<a class=\"contacts-link\" href=\""+bio.contacts.linkedin+"\" target=\"_blank\">"+bio.contacts.linkedin+"</a>");

  // Display stuff please
  $("#header").append(formattedName);
  $("#header").append(formattedRole);
  // contacts
  $("#header").append(f_photo);
  HTMLContacts = '<dl id="topContacts"></dl>';
  $("#header").append(HTMLContacts);
  $("#topContacts").append(f_location);
  $("#topContacts").append(github);
  $("#topContacts").append(f_linkedin);
  $("#topContacts").append(f_email);

  // $("#header").append(f_welcome_msg);
  // skills
  if ( bio.skills.length > 0 ) {
    $("#topContacts").append(HTMLskillsStart);
    for (s in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[s]);
      $("#skills").append(formattedSkill);
    }
  }
}

/*
education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/
var education = { 
  "schools":
  [ 
    { 
        "name": "High School",
        "location": "Perugia, Italy",
        "degree": "High School Diploma",
        "major": [ "Science","English"],
        "dates": "From: 1980 To: 1984",
        "url": "#" 
      },
      { 
        "name": "Open University",
        "location": "Milton Keynes",
        "degree": "Certificate in Math and Computing",
        "major": [ "CS","Math"],
        "dates": "From: 2006 To: 2010",
        "url": "http://open.ac.uk" 
        },
        { 
          "name": "Open University",
          "location": "Milton Keynes",
          "degree": "Diploma in Computing",
          "major": [ "CS","Java"],
          "dates": "From: 2006 To: 2011",
          "url": "http://open.ac.uk" 
        }      
  ],
  "onlineCourses": 
  [ 
      {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2014",
        "url" : "http://www.udacity.com"
      },
      {
        "title": "JavaScript basics",
        "school": "Udacity",
        "dates": "2014",
        "url" : "http://www.udacity.com"
      },
      {
        "title": "Front-end programming nanodegree",
        "school": "Udacity",
        "dates": "2014",
        "url" : "http://www.udacity.com"
      },
      {
        "title": "Computer Networks",
        "school": "Coursera",
        "dates": "2014",
        "url" : "https://www.coursera.org"
      },
      {
        "title": "An Introduction to Interactive Programming in Python",
        "school": "Coursera",
        "dates": "2014",
        "url" : "https://www.coursera.org"
      },
      {
        "title": "Learn to Program: The Fundamentals",
        "school": "Coursera",
        "dates": "2013",
        "url" : "https://www.coursera.org"
      },
      {
        "title": "Software Engineering for SaaS",
        "school": "Coursera",
        "dates": "2012",
        "url" : "https://www.coursera.org"
      }
  ]
}

education.display = function () {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    // start the HTML
    $("#education").append("<div id=\"education-foldable-content\"></div>");
    for (e in education.schools) {
      $("#education-foldable-content").append(HTMLschoolStart);
      // console.log(education.schools[e].name);
      var a=HTMLschoolName.replace("%data%",education.schools[e].name);
      // a=a.replace("%link%",education.schools[e].url);
      //console.log(a);
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[e].dates));
      $(".education-entry:last").append(a);
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[e].location));
      $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[e].degree));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[e].major));
    }
    // start the HTML
    $(".education-entry:last").append(HTMLonlineClasses);
    for (e in education.onlineCourses) {
      var a = HTMLonlineTitle.replace("%data%",education.onlineCourses[e].title);
      $(".education-entry:last").append(a);
      $(".education-entry:last").append(HTMLonlineSchool.replace('%data%',education.onlineCourses[e].school));    
      $(".education-entry:last").append(HTMLonlineDates.replace('%data%',education.onlineCourses[e].dates));    
    }
  }
}

/*
projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
*/
var projects = {
  "projects": 
  [
    {
      "title": "TFL train arrivals",
      "dates": "2014",
      "description": "TFL Train arrival board",
      "images": ["images/197x148.gif"]
    },
    {
      "title": "BhaktiEvent e-store",
      "dates": "2013",
      "description": "e-store for German Charity Bhakti Marga",
      "images": ["images/197x148.gif"]
    },    
    {
      "title": "Iain Sinclair Official Unofficial",
      "dates": "2008",
      "description": "Official Unofficial website of British writer Iain Sinclair",
      "images": ["images/197x148.gif"]
    }
  ]
}

// create a function as part of the projects objects
// encapsulation
projects.display = function () {
  $("#projects").append("<div id=\"projects-foldable-content\"></div>");
  for (p in projects.projects) {
    $("#projects-foldable-content").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[p].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[p].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[p].description));
    if (projects.projects[p].images.length > 0 ) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[p].images[0]));
    }
  }
}

//////// helper functions ///////////////////////////
function inName(name) {
  names = name.trim().split(' ');
  //console.log(names[0],names[1]);
  names[0]=names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1]=names[1].toUpperCase();
  //console.log(names[0]+" "+names[1]);
  return names[0]+" "+names[1];
}

/////////// main /////////////////////////////////////

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
// $("#footerContacts").append("<a href=\"mailto:" + bio.contacts.email + "\">"+bio.contacts.email+"</a>")
// $("#topContacts").replaceWith("<span class=\"orange-text\">github: <a href=\"#\"><span class=\"white-text\">benny</span></a></span>");
