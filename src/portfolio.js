/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};
const greeting = {
  username: "EdenNeker",
  title: "Hi All, I'm EDEN NEKER",
  subTitle: emoji(
    "A passionate Frontend Software Developer 🚀 Having An Experience Of Building Web And Mobile Applications With JavaScript / Reactjs / Flutter / React Native/ some Nodejs/ And  Other Cool Libraries And Frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/196CVfRPH922DMB0XYrtDDmqDbx_wtcza/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/edu21n2016",
  linkedin: "https://www.linkedin.com/in/eden-neker-software-student/",
  gmail: "eden22neker@gmail.com",
  gitlab: " ",
  facebook: " ",
  medium: " ",
  stackoverflow: " ",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Crazy UI/UX and Frontend  Developer and some knowledge  about backend  Who Want To Learn More Programming Languages",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactnative",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Addis Ababa Science and Tecnology Unversity",
      logo: require("./assets/images/aastulogo.png"),
      subHeader: "Software Engineer ",
      duration: "september 2020 - January 2025",
      desc: "Participated in the Programming Challenge ",
      descBullets: [
        "I Love Coding In Schools's Computer",
        "Learning HTML In School 😂"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ui/ux",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Kuraz-Tec",
      companylogo: require("./assets/images/kuraz.jpeg"),
      date: "june 2024 – sep 2025",
      desc: " Developer at KURAZ TECH using React. Gained valuable experience collaborating with colleagues and supervisors, tackling daily tasks, and successfully completing the major Prisco project as a final submission."
    },
    {
      role: "Flutter Developer  ",
      company: "GDG STUDENT CLUB",
      companylogo: require("./assets/images/GDG.png"),
      date: "Jan 2023 – Sep 2025",
      desc: "Mentored beginners while also learning as a mentee. Completed the MindHub project as a hackathon entry, developed an e-commerce app as a capstone project, and contributed to various weekly tasks for GDG developments."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some  projects that I've worked on in my student journey",
  projects: [
    {
      image: require("./assets/images/yegna.jpeg"),
      projectName: "Yegna Test Bot",
      projectDesc:
        "Yegna Taste Bot is our final year capstone project developed over the course of a year. It is an intelligent chatbot designed to help users discover recipes based on the ingredients they already have. The bot includes several features such as a blog section, favorite content management, and more. It aims to solve the problem of food decision-making with limited resources.!",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AASTUSoftwareEngineeringDepartment/HomecookingChatbot-"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mind hub.png"),
      projectName: "MindHup mobile app ",
      projectDesc:
        "During the GDG program, we worked on developing a mobile application with rich functionality aimed at helping students manage and reduce mental health struggles. !",
      footerLink: [
        {
          name: "Visit the short video",
          url: "https://drive.google.com/file/d/1cyXOgCR0dVm-jAxQxz9BlXMOXEYYnjeu/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "GDG Developer club",
      subtitle:
        "Member Of GDG student developer Team  as eginner track mentor and frontend.",
      image: require("./assets/images/GDG.png"),
      footerLink: [
        {
          name: " view the Certification",
          url: "https://drive.google.com/drive/folders/1Qhgvz3bSB-R6a6oDnDjXYIUseM29Bhn6?usp=drive_link"
        }
      ]
    },
    {
      title: "Photoshop course",
      subtitle:
        "Student of the Korean Volunteers program, participated in various projects and tests.",
      image: require("./assets/images/photoshop.jpeg"),
      footerLink: [
        {
          name: "View the certificate",
          url: "https://drive.google.com/file/d/1cGxzN-bcnkU1dMnadZ-INFla8FytcWmr/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.w3schools.com/",
      title: "How To Learn Coding?",
      description:
        "You Can Learn Coding From Diffent Sites / Videos But I Suggest To Use W3 School."
    },
    {
      url: "https://www.w3schools.com/",
      title: "Why React Is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "COOMING SOON!!! \n Talks",
  subtitle: emoji("I Love To Share My Limited Knowledge 🙄"),

  talks: [
    {
      title: "Learn JavaScript / HTML",
      subtitle: "COMMING SOON",
      slides_url: " ",
      event_url: " "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle:
    "I LOVE TO TALK ABOUT Churches, Technology , true story And I love to share my knowledge",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss A Project Or Just Want To Say Hi? My Inbox Is Open For All.",
  email_address: "eden22neker@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: " ", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
   openSource,
  contactInfo,
  twitterDetails
};
