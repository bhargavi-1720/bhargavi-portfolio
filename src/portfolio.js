/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bhargavi Duduku",
  title: "Hi, I'm Bhargavi",
  subTitle: emoji(
    "A passionate Data & Cloud Engineer graduating with a Master's in Computer & Information Systems in May 2025. I have hands-on experience in building data pipelines, cloud solutions, and full-stack applications using tools like AWS, GCP, Python, and SQL. I'm driven by curiosity, a love for learning, and a desire to build impactful, scalable systems at the intersection of data, cloud, and AI.🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1agWi7ei2G2DTRvr0G9_7OtJ2ChLwd65B/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bhargavi-1720",
  linkedin: "https://www.linkedin.com/in/bhargavi-duduku",
  gmail: "duduku.bhargavi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Building scalable data pipelines using Python, SQL, and AWS Glue"
    ),
    emoji("⚡ Automating analytics with Alteryx, Tableau, and Power BI"),
    emoji("⚡ Designing and deploying cloud-native solutions on AWS"),
    emoji("⚡ Full-stack development with Angular, Java, and Python APIs"),
    emoji("⚡ Visualizing insights and trends through interactive dashboards")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },

    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-powerbi"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Alteryx",
      fontAwesomeClassname: "fas fa-alteryx"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Saint louis University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computers and Information Systems",
      duration: "August 2023 - May 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "AVN Institute of engineering and technology",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computers and Electronics engineering",
      duration: "2017 - 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Restyled by Izzy",
      companylogo: require("./assets/images/izzy.png"),
      date: "nov 2023 –  april 2024",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Worked with Alteryx to process and convert giant datasets by null handling, deleting duplicates, removing outliers, and optimizing ETL operations.",
        "validated website backend data through tracking users' activity, web traffic, and transactions in order to update and maintain proper records.",
        "Monitor and compared user engagement (user interaction likes and comments), inventory, and sales metrics, crafting interactive dashboards through Tableau/Power BI.",
        "Performed exploratory data analysis (EDA) to determine patterns and trends on sales performance as well as the activity of the users and improved it by more than 50%.",
        "Created predictive models in Python and Alteryx to forecast sales and improve inventory planning, leading to improved decision-making."
      ]
    },
    {
      role: "Full stack developer",
      company: "Vanguard (Infosys Ltd)",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Nov 2021 – August 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Migrated legacy apps to AWS (S3, Lambda, EC2, Glue, Redshift), improving performance by 2x–3x",
        "Developed full-stack features using Angular, Java & Python",
        "Built ETL pipelines with AWS Glue and Python/SQL for user data",
        "Collaborated on A/B tests, increasing online sales by 25%",
        "Built Power BI and Tableau dashboards to monitor KPIs"
      ]
    },
    {
      role: "Data & Cloud Engineering Intern",
      company: "ICloud",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "march 2021 – October 2021",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Used Alteryx for cleaning and transforming large datasets",
        "Integrated AWS (S3, Lambda, Glue, IAM, Athena) with Alteryx workflows",
        "Built geospatial dashboards to analyze regional trends",
        "Automated alerting and reporting with CloudWatch",
        "Supported hybrid cloud solutions with AWS + GCP"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: "Github and major Projects",
  subtitle: "SOME PROJECTS THAT I have in github",
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "SOME PROJECTS THAT I WORKED ON WHILE STUDYING",
  projects: [
    /*{
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.    
      ] 
    },*/
    {
      projectName: "Closet Couture – Virtual Wardrobe App",
      projectDesc:
        "Planned and designed a virtual wardrobe management app to digitize clothing items and revolutionize fashion discovery. Worked on product backlog, interactive wireframes, and project planning documentation.",
      tags: ["Agile", "UI/UX", "Wireframing", "Product Planning"],
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/19IA0cEDY7L_sbU-pGrYUsmkLpEA4Bu-X?usp=drive_link"
        }
      ]
    },

    {
      projectName: "IT Disruption & Digital Strategy Case Study",
      projectDesc:
        "Analyzed IT disruptions and competitive advantage using real-world case studies. Created a business case, digital storefront model, and investment strategy recommendations.",
      tags: ["IT Strategy", "Digital Transformation", "Business Case", "PDF"],
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/1u6GRWBsf7_t1DE-u1AQy8xSakjd2zu4X?usp=drive_link" // ← replace with actual link if available
        }
      ]
    },

    {
      projectName: "Advanced Software Dev – CI/CD & Web Components",
      projectDesc:
        "Designed a cloud-native architecture, practiced CI/CD pipelines using Jest and NodeJS, and built modular web components. Hands-on work with deployment automation and agile workflows.",
      tags: ["CI/CD", "Cloud Architecture", "NodeJS", "Web Components"],
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/1F5e5WWskFvN2F9SngeodDhL7n82rzYbg?usp=drive_link" // ← replace with main link or PDF
        }
      ]
    },

    {
      projectName: "Data Visualization Dashboard",
      projectDesc:
        "Built an interactive dashboard using modern visualization techniques to present KPIs and business insights. Emphasized storytelling with data and audience-focused design.",
      tags: ["Tableau", "Power BI", "Dashboard", "Storytelling"],
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/16JjGwXekLbyFsXxcNlG1Mf1aAQra7J2s?usp=drive_link" // ← replace with your file if available
        }
      ]
    },

    {
      projectName: "Cybersecurity Kill Chain & Network Scanning",
      projectDesc:
        "Explored the 7 phases of the Cyber Kill Chain and applied Nmap/ZENMAP for real-world vulnerability scanning and enterprise security evaluation.",
      tags: ["Cybersecurity", "Network Scanning", "Nmap", "Zenmap"],
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/1wfMEJmSgyKY3RroFUZtZgoLFLb5eeMFt?usp=drive_link" // ← replace with your file if available
        }
      ]
      //github: "",
    },

    {
      projectName: "Enterprise Architecture & Cloud Strategy",
      projectDesc:
        "Explored enterprise operating models, business process modeling, and digital transformation frameworks. Created core diagrams, mind maps, OLTP/OLAP comparison, and market research journals. Completed Azure cloud training and TOGAF-based architecture planning.",
      tags: [
        "Enterprise Architecture",
        "Azure",
        "TOGAF",
        "System Design",
        "Cloud Strategy"
      ],
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/1mnfGA54EC_BIl6URoJ5oIVPdQRGXO0C2?usp=drive_link" // ← replace with your file if available
        }
      ]
    },
    {
      projectName: "Zenmap- Cyber kill chain Demo",
      projectDesc:
        "Explored enterprise operating models, business process modeling, and digital transformation frameworks. Created core diagrams, mind maps, OLTP/OLAP comparison, and market research journals. Completed Azure cloud training and TOGAF-based architecture planning.",
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/1wfMEJmSgyKY3RroFUZtZgoLFLb5eeMFt?usp=drive_link" // ← replace with your file if available
        }
      ]
    },
    {
      projectName: "global grad projects",
      projectDesc: "Understanding us culture presentation",
      footerLink: [
        {
          name: "Visit presentation",
          url: "https://docs.google.com/presentation/d/1iMus-H1WSM-YuWWR702fJ1VrogO2UpMDbt-INLNNigY/edit?usp=drive_link"
        }
      ]
    },
    {
      projectName: "Obesity & Geographic Research(Applied Analytics)",
      projectDesc:
        "Explored enterprise operating models, business process modeling, and digital transformation frameworks. Created core diagrams, mind maps, OLTP/OLAP comparison, and market research journals. Completed Azure cloud training and TOGAF-based architecture planning.",
      footerLink: [
        {
          name: "google drive",
          url: "https://drive.google.com/drive/folders/1wfMEJmSgyKY3RroFUZtZgoLFLb5eeMFt?usp=drive_link" // ← replace with your file if available
        },
        {
          name: "Visit presentation",
          url: "https://docs.google.com/presentation/d/1iMus-H1WSM-YuWWR702fJ1VrogO2UpMDbt-INLNNigY/edit?usp=drive_link"
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
      title: "Solution Architect Associate - AWS",
      //subtitle: "cleared an exam with %.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AWS Solution architect associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1rgC76rA7p29XHGFgZMRc6F0uzCuegr6z/view?usp=drive_link"
        }
        /*{
          name: "",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }*/
      ]
    },
    {
      title: "Azure Data Engineer Associate - Microsoft",
      //subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/airbnbLogo.png"),
      imageAlt: "Azure Data Engineer Associate",
      footerLink: [
        {
          name: "Certification",
          url: "" // paste a link here
        }
      ]
    },

    {
      title: "cloud computing, cybersecruity specialist, machine learning",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/awseducate.jpeg"),
      imageAlt: "AWS Educate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CelITIzmu-B9oAZsZFzrRbYZjWeSehaE/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Blueprism, Eduskills - RPA Riders",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://eu.badgr.com/public/assertions/03aat5HiRciXwoDFyNJxaA"
        }
      ]
    },
    {
      title: "Blueprism",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/blueprism.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1WL7e4Kromn8OvZ0eJKTJUfD5NP_bitvb/view?usp=drive_link"
        }
      ]
    },
    /*{
      title: "cloud computing - azure training", 
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    },*/

    {
      title: "Data Analytics - Cisco",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/cisco.webp"),
      imageAlt: "PWA Logo",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "Think Big with Functional Programming - Juspay",
      //subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/juspay.png"),
      imageAlt:
        " Juspay Hiring Challenge - Think Big with Functional Programming",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gCOGzni3PhIMwZXd9tmHjvCjBOt7jRs_/view?usp=drive_link" // paste a link here
        }
      ]
    },
    {
      title: "Walmart CodeHers - Walmart Global Tech India",
      //subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/walmart.png"),
      imageAlt: "Walmart CodeHers organised by  Walmart Global Tech India",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1i4qOSukMVdDc1VrO2_3uozydiiZaHOwS/view?usp=drive_link" // paste a link here
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Educational Projects/github",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(314)536-7013",
  email_address: "duduku.bhargavi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
