////////////////////////////Bio//////////////////////////////////////////
var bio = {
	"name" : "Max Yokha",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile": "+380959341685",
		"email" : "max.yokha@gmail.com",
		"github" : "mYokha",
		"twitter" : "@max_y_lfc",
		"location" : "Kyiv"
	},
	"weclomeMessage" : "Hi, my name's Max. Thanks for stopping by and welcome to my online resume page!",
	"skills" : ["awesomeness", "programming", "html and css", "javascript"],
	"biopic" : "images/197x148.gif"
};

bio.display = function (){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	/////////////////////////////Contacts//////////////////////////////////////
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedLocation);
	///////////////////////////////////////////////////////////////////////////

	//bio pic
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	//welcome message
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.weclomeMessage);
	$("#header").append(formattedMsg);

	//skills
	if (bio.skills.length) {
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		}

	}
};
///////////////////////////////////////////////////////////////////////////

/////////////////////////////Work//////////////////////////////////////////
var work = {
	"jobs" : [
		{
			"employer" : "Agroresurs LLC",
			"title" : "Sales Manager",
			"location" : "Kharkiv, Ukraine",
			"dates" : "July, 2014 - July, 2015",
			"description" : "It was my first job. Not the best job ever but I did my best. What exactly did I do? I was selling some agricultural machines."
		},
		{
			"employer" : "uip.me",
			"title" : "Journalist",
			"location" : "Kyiv, Ukraine",
			"dates" : "September, 2015 - October, 2015",
			"description" : "A month of practicing as a journalist or a rewiter for one of the most popular sites in Ukraine about Apple devices."
		},
		{
			"employer" : "LAB01",
			"title" : "Content Manager",
			"location" : "Kyiv, Ukraine",
			"dates" : " in progress",
			"description" : "As it says it's my current job. A nice one. Mostly I add content to web sites built on Joomla!, WordPress or OpenCart. Also a bit of photo editing."
		}
	]
};

work.display = function () {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

		$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);

		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedworkDates);

		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedworkLocation);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedworkDescription);
	}
};
///////////////////////////////////////////////////////////////////////////

//To check out how last name internatiolizer works uncomment the code below
// var inName = function(name){
// 	name = name.trim().split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name.join(" ");
// }
//$("#main").append(internationalizeButton);

//////////////////////////Pojects//////////////////////////////////////////
var projects = {
	"projects" : [
		{
			"title" : "Lorem ipsum",
			"dates" : "January 2016 - January 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://placekitten.com/g/480/320",
				"http://placekitten.com/g/480/320",
				"http://placekitten.com/g/480/320"
			]
		},
		{
			"title" : "Lorem ipsum",
			"dates" : "January 2016 - January 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://placekitten.com/g/480/320",
				"http://placekitten.com/g/480/320",
				"http://placekitten.com/g/480/320"
			]
		},
		{
			"title" : "Lorem ipsum",
			"dates" : "January 2016 - January 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"http://placekitten.com/g/480/320",
				"http://placekitten.com/g/480/320",
				"http://placekitten.com/g/480/320"
			]
		}
	]
};

projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLworkDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedprojectDescription);

		if (projects.projects[i].images.length) {
			for (var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
		$(".project-entry:last").append(formattedprojectImage);
			}
		}

	}
};
///////////////////////////////////////////////////////////////////////////

//////////////////////////Education////////////////////////////////////////
var education = {
	"schools" : [
		{
			"name" : "Kharkiv Polytechnic Institute",
			"location" : "Kharkiv, Ukraine",
			"degree" : "Bachelor degree",
			"majors" : ["Automobile industry", "general subjects"],
			"dates": "September 2009 - June 2013",
			"url" : "https://www.kpi.kharkov.ua/eng/" 
		},
		{
			"name" : "Kharkiv Polytechnic Institute",
			"location" : "Kharkiv, Ukraine",
			"degree" : "Master degree",
			"majors" : ["Motor vehicles"],
			"dates": "September 2013 - June 2014",
			"url" : "https://www.kpi.kharkov.ua/eng/" 
		}
	],
	"onlineClasses" : [
		{
			"title" : "HTML, CSS, JS and SQL",
			"school" : "codecademy.com",
			"dates" : "No timeline on those courses",
			"url" : "https://www.codecademy.com/yokha"
		},
		
		{
			"title" : "Front-End Nanodegree",
			"school" : "udacity.com",
			"dates" : "March 8th 2017 - present",
			"url" : "https://profiles.udacity.com/p/10342089319"
		}

	]
};

education.schools.display = function () {
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedschoolLocation);

			var majorsLine = "";

			for (var j = 0; j < education.schools[i].majors.length; j++) {
				if (j === education.schools[i].majors.length - 1){
					majorsLine += education.schools[i].majors[j];
				} else {
					majorsLine += education.schools[i].majors[j] + ", ";
				}
			}

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", majorsLine);
			$(".education-entry:last").append(formattedschoolMajor);
	}
};

education.onlineClasses.display = function () {
	$(".education-entry:last").append(HTMLonlineClasses);

	for (var j = 0; j < education.onlineClasses.length; j++) { //used j instead of i just to feel safer (:

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
};

education.display = function() {
    education.schools.display();
    education.onlineClasses.display();
};
////////////////////////////////////////////////////////////////////////

////////////////Calling the functions///////////////////////////////////
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);