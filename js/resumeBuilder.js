//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
	"name" : "Max Yokha",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile": "+380959341685",
		"email" : "max.yokha@gmail.com",
		"twitter" : "@max_y_lfc",
		"gitHub" : "mYokha",
		"linkedIn" : "max-yokha-348267134",
		"location" : "Kyiv"
	},
	"weclomeMessage" : "Hi, my name's Max. Thanks for stopping by and welcome to my online resume page!",
	"age" : 25,
	"skills" : ["awesomeness", "programming", "html and css", "javascript"],
	"bioPic" : "images/197x148.gif"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/////////////////////////////Contacts//////////////////////////////////////
// my phone number
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

// email
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

//twitter
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

//github
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
$("#topContacts").append(formattedGitHub);

//linkedin
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedIn);
$("#topContacts").append(formattedLinkedIn);

//location
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
///////////////////////////////////////////////////////////////////////////


//bio pic
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

//welcome message
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.weclomeMessage);
$("#header").append(formattedMsg);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
/////////////////////////////Work//////////////////////////////////////
var work = {
	"jobs" : [
		{
			"employer" : "Agroresurs LLC",
			"job" : "Sales Manager",
			"location" : "Kharkiv, Ukraine",
			"dates" : "July, 2014 - July, 2015",
			"description" : "It was my first job. Not the best job ever but I did my best. What exactly did I do? I was selling some agricultural machines."
		},
		{
			"employer" : "uip.me",
			"job" : "Journalist",
			"location" : "Kyiv, Ukraine",
			"dates" : "September, 2015 - October, 2015",
			"description" : "A month of practicing as a journalist or a rewiter for one of the most popular sites in Ukraine about Apple devices."
		},
		{
			"employer" : "LAB01",
			"job" : "Content Manager",
			"location" : "Kyiv, Ukraine",
			"dates" : " July, 2016 - Current job",
			"description" : "As it says it's my current job. A nice one. Mostly I add content to web sites built on Joomla!, WordPress or OpenCart. Also a bit of photo editing."
		}
	]
}

work.display = function () {
	for(var i = 0; i < work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);

		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].job);

		$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);

		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedworkDates);

		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedworkLocation);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedworkDescription);
	}
}
work.display();
///////////////////////////////////////////////////////////////////////////

var inName = function(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name.join(" ");

}

//To check out how last name internatiolizer works uncomment the code below
//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
//////////////////////////Pojects//////////////////////////////////////////
var projects = {
	"projects" : [
		{
			"title" : "Lorem ipsum",
			"dates" : "January 2016 - January 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://placehold.it/480x320",
				"http://placehold.it/480x320",
				"http://placehold.it/480x320"
			]
		},
		{
			"title" : "Lorem ipsum",
			"dates" : "January 2016 - January 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://placehold.it/480x320",
				"http://placehold.it/480x320",
				"http://placehold.it/480x320"
			]
		},
		{
			"title" : "Lorem ipsum",
			"dates" : "January 2016 - January 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://placehold.it/480x320",
				"http://placehold.it/480x320",
				"http://placehold.it/480x320"
			]
		}
	]
}

projects.display = function() {
	for(var i = 0; i < projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLworkDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedprojectDescription);

		if (projects.projects[i].images.length > 0) {
			for (var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
		$(".project-entry:last").append(formattedprojectImage);
			}
		}

	}
}

projects.display();
///////////////////////////////////////////////////////////////////////////

//////////////////////////Education////////////////////////////////////////
var education = {
	"schools" : [
		{
			"name" : "Kharkiv Polytechnic Institute",
			"degree" : "Bachelor degree",
			"dates": "September 2009 - June 2013",
			"location" : "Kharkiv, Ukraine",
			"major" : "Automobile industry, general subjects"
		},
		{
			"name" : "Kharkiv Polytechnic Institute",
			"degree" : "Master degree",
			"dates": "September 2013 - June 2014",
			"location" : "Kharkiv, Ukraine",
			"major" : "Motor vehicles"
		}/*,
		{
			"name" : "Green Forest English school",
			"degree" : "Advanced level",
			"dates": "2 years",
			"location" : "Kharkiv, Ukraine",
			"major" : "English"
		}*/
	],
	"onlineClasses" : [
		/*{
			"school" : "w3schools.com",
			"title" : "HTML, CSS",
			"dates" : "",
			"url" : "w3schools.com"
		},*/
		{
			"school" : "codecademy.com",
			"title" : "HTML, CSS, JS and SQL",
			"dates" : "No timeline on those courses",
			"url" : "https://www.codecademy.com/yokha"
		},
		
		{
			"school" : "udacity.com",
			"title" : "Front-End Nanodegree",
			"dates" : "March 8th 2017 - present",
			"url" : "https://profiles.udacity.com/p/10342089319"
		}

	]
}

education.schools.display = function () {
	for(var i = 0; i < education.schools.length; i++){
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedschoolLocation);

		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedschoolMajor);
	}
}
education.schools.display();

education.onlineClasses.display = function () {
	$(".education-entry:last").append(HTMLonlineClasses);

	for(var j = 0; j < education.onlineClasses.length; j++){ //used j instead of i just to feel safer (:

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[j].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[j].school);
		$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
		
		// I had to add a <br> tag in helper.js in order the dates to output correctly
		//If there's a mistake I've made please provide me with the way to solve it. Thanks!
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[j].dates);
		$(".education-entry:last").append(formattedonlineDates);

		var formattedonlineURL= HTMLonlineURL.replace("%data%", education.onlineClasses[j].url);
		$(".education-entry:last").append(formattedonlineURL);
	}
}
education.onlineClasses.display();
///////////////////////////////////////////////////////////////////////////