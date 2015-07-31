//Time to create the json objects to populate the html
//bio 
var bio = {
    "bio": [
        {
            "name": "Matt Castle",
            "role": "Web Developer",
            "pic": "images/267fd64.jpg",
            "welcomeMessage": "Web programming manager who is looking to sharpen basic skills and explore modern web development",
            "contacts": [
                {
                    "email": "mattcc82@gmail.com",
                    "mobile": "248.330.2796",
                    "linkedIn": "<a href='https://www.linkedin.com/pub/matthew-castle/7/228/668' target='_blank'>Matt Castle</a>",
                    "gitHub": "<a href='https://github.com/mattcc82' target='_blank'>mattcc82</a>",
                    "location": "Metro Detroit"
                }
            ],
            "skills": [
                "Javascript",
                "CSS3",
                "Bootstrap",
                "HTML5",
                "Responsive Web Design",
                "Web Programming Management",
                "C#",
                "ASP.Net",
                "Market Research / Quantitative Research",
                "Data Collection",
                "SQL"
            ]
        }
    ]
};

//work 
var work = {
    "jobs": [
        {
            "employer": "Gongos",
            "title": "Director, Information Systems",
            "location": "Metro Detroit",
            "dates": [2013, 2015],
            "description": "Direct, manage, and lead an Information Systems department of programmers responsible for all primary research data collection and processing"
        },
        {
            "employer": "Gongos",
            "title": "Senior Programmer, Team Lead, Information Systems",
            "location": "Metro Detroit",
            "dates": [2008, 2013],
            "description": "Manage and coordinate a team of programmers responsible for front end data collection and back end data processing"
        },
        {
            "employer": "Gongos",
            "title": "Programmer/Analyst",
            "location": "Metro Detroit",
            "dates": [2007, 2008],
            "description": "Program and execute data collection and data processing using tools/languages like: C#, ASP.NET, VBScript, SQL Server, Javascript/jQuery, SPSS, Quantum"
        }
    ]
};

//education
var education = {
    "schools": [
        {
            "name": "Oakland University",
            "city": "Rochester, MI",
            "degree": "BS",
            "major": "Management Information Systems",
            "areas": [
                "Databases",
                "Programming",
                "Statistics",
                "Management",
                "Accounting",
                "Networks",
                "Visual Design"
            ]
        }
    ]
};

//projects
var projects = {
    "project": [
        {
            "title": "Portfolio",
            "dates": [
                2015
            ],
            "description": "An exploration into modern web technologies used to house my personal projects and learning",
            "images": [
                "images/project_1_1.jpg"
            ]
        }
    ]
};


var formattedName = HTMLheaderName.replace('%data%', bio.bio[0].name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.bio[0].role);
var formattedSkills = HTMLskills.replace('%data%', bio.bio[0].skills);
var formattedMobile = HTMLmobile.replace('%data%', bio.bio[0].contacts['mobile']);
var formattedEmail = HTMLemail.replace('%data%', bio.bio[0].contacts['email']);
var formattedLinkedIn = HTMLLinkedIn.replace('%data%', bio.bio[0].contacts['linkedIn']);
var formattedGitHub = HTMLgithub.replace('%data%', bio.bio[0].contacts['gitHub']);
var formattedLocation = HTMLlocation.replace('%data%', bio.bio[0].contacts['location']);
var formattedPic = HTMLbioPic.replace('%data%', bio.bio[0].pic);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.bio[0].welcomeMessage);

//push to html
//header
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedPic);
$('#header').append(formattedWelcome);
$('#header').append(HTMLskillsStart);
$('#header').append(formattedSkills);

//contacts
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedLinkedIn);
$('#topContacts').append(formattedGitHub);
$('#topContacts').append(formattedLocation);
