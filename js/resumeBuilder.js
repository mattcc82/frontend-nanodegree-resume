//creating piped in variables 
//header
var name = 'matt castle';
var role = 'web developer';

//skills
var skills = [
	'Javascript', 
	'CSS3', 
	'Bootstrap', 
	'HTML5', 
	'Responsive Web Design', 
	'Web Programming Management', 
	'C#', 
	'ASP.Net', 
	'Market Research / Quantitative Research', 
	'Data Collection', 
	'SQL' 
	];

//contact info
var contact = {
	"email": 'mattcc82@gmail.com',
	"phone": '248.330.2796',
	"linkedIn": '<a href="https://www.linkedin.com/pub/matthew-castle/7/228/668" target="_blank">Matt Castle</a>',
	"gitHub": '<a href="https://github.com/mattcc82" target="_blank">mattcc82</a>',
	"location": "metro Detroit"
}

//pic url
var pic = 'images/267fd64.jpg';

//welcome message
var welcome = 'Web programming manager who\'s looking to sharpen basic skills and explore modern web development';

//bio object
var bio = {
	"name": name,
	"role": role,
	"skills": skills,
	"contactInfo": contact,
	"pic": pic,
	"welcome": welcome
};

//work object
var work = {};
work.currentTitle = "Director, Information Systems";
work.currentFirm = "Gongos";
work.currentYears = "December 2013 - Present";
work.currentSummary = "Direct, manage, and lead an Information Systems department of programmers responsible for all primary research data collection and processing.";

var school = {};
school["school"] = "Oakland University";
school["degree"] = "BS, Management Information Systems";
school["years"] = "2003 - 2006";
school["areas"] = "Databases, Programming, Statistics, Management, Accounting, Networks, Visual Design";

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);
var formattedMobile = HTMLmobile.replace('%data%', bio.contactInfo['phone']);
var formattedEmail = HTMLemail.replace('%data%', bio.contactInfo['email']);
var formattedLinkedIn = HTMLLinkedIn.replace('%data%', bio.contactInfo['linkedIn']);
var formattedGitHub = HTMLgithub.replace('%data%', bio.contactInfo['gitHub']);
var formattedLocation = HTMLlocation.replace('%data%', bio.contactInfo['location']);
var formattedPic = HTMLbioPic.replace('%data%', bio.pic);

//push to html
//header
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

//contacts
$('#topContacts').append(formattedPic);
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedLinkedIn);
$('#topContacts').append(formattedGitHub);
$('#topContacts').append(formattedLocation);

//