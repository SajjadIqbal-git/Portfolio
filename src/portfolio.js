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
  username: "Sajjad Iqbal",
  title: "Hi all, I'm Sajjad",
  subTitle: emoji(
    "As a seasoned computer vision engineer, I develop innovative algorithms and systems for machine perception. I design and implement accurate object detection systems using Ultralytics(YOLO), and develop efficient image processing pipelines for various applications, including OCR and facial recognition. Additionally, I have a strong background in NLP, with a focus on building conversational AI chatbots using OpenAI's API Assistant and other tools, and working with LLMs to enhance communication and interaction in intelligent systems. I'm proficient in a range of AI APIs and tools, including OpenAI's API Assistant and Microsoft Copilot Studio."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ze_vZGmqQqs9WjRoInpVTThVLSnI86QT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/sajjad-iqbal-515b75202/",
  gmail: "sajjadiqbal1999@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I design and develop cutting-edge AI solutions, harnessing the power of computer vision and nlp.",
  skills: [
    emoji("⚡ Architecting object detection, classification, and tracking models with state-of-the-art accuracy."),
    emoji("⚡ Crafting efficient image processing pipelines for various applications, including OCR and facial recognition."),
    emoji("⚡ Developing conversational AI chatbots using LLMs and integrating them with third-party platforms."),
    emoji("⚡ Fine-tuning LLMs for specific tasks and domains, achieving exceptional results."),
    emoji("⚡ Building custom NLP models for text classification, sentiment analysis, and language translation."),
    emoji("⚡ Integrating AI APIs and tools, including OpenAI's API Assistant and Microsoft Copilot Studio, to enhance project capabilities."),
    emoji("⚡ Proficient in Python, with expertise in leveraging libraries like OpenCV, TensorFlow, and PyTorch."),
    ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "ML",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "DL",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Nlp",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "ChatBot Building",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "LLM",
      fontAwesomeClassname: "fas fa-book-open"
    },
    {
      skillName: "FastApi",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Web Scraping",
      fontAwesomeClassname: "fas fa-database"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Sarh",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Sarhad University of Science and Information Technology",
      logo: require("./assets/images/uni.jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "October 2016 - Novembe 2020",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
  {
  Stack: "Computer Vision (Object Detection, Classification, Tracking, Image Processing)",
  progressPercentage: "95%"
  },
  {
  Stack: "Natural Language Processing (NLP), Machine Learning (ML), Deep Learning (DL)",
  progressPercentage: "85%"
  },
  {
  Stack: "Full-Stack Development (Python, OpenCV, PyTorch)",
  progressPercentage: "80%"
  }
  ],
  displayCodersrank: false
  };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Vision Engineer",
      company: "SOFIT Consultancy (Pvt.) Ltd.",
      companylogo: require("./assets/images/sofit.jpg"),
      date: "June 2022 – july 2023",
      desc: "SOFIT Consultancy (Private) Limited is a global Digital Services Provider impacting millions through its technical capabilities."
    },
    {
      role: "AI Pormpt Engineer",
      company: "Vizz Web Solutions",
      companylogo: require("./assets/images/vizz.jpg"),
      date: "December 2023 – Present",
      desc: "Vizz Web Solutions as a leading global IT company, has delivered unparalleled expertise in digital, big data, machine Learning, and cloud technologies Since 2009. Vizz Web have expertise in software development and integration, data management, data analytics, blockchain development, Internet of Things, mobile application development, web application development, ERP Solutions, UI/UX, IT infrastructure solutions, and Artificial Intelligence."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
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
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display:false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    
    
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "Completed Certifcation from DeepLearning.AI, Stanford University.",
      image: require("./assets/images/1.jpg"),
      imageAlt: "img",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/760826a9b0d3639f2c3b481c67502c53"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Machine Learning for All",
      subtitle: "Completed Certifcation from University of Michigan.",
      image: require("./assets/images/2.jpg"),
      imageAlt: "img",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/ad2ac2ce4df3d604c94eefdfb76c33b5"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Python (Basic) Certificate",
      subtitle: "Achieved from Hacker Rank.",
      image: require("./assets/images/3.png"),
      imageAlt: "img",
      footerLink: [
        {name: "Certification", url: "https://www.hackerrank.com/certificates/12aa6b7cf790"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3462860621",
  email_address: "sajjadiqbal1999@gmail.com"
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
  isHireable
};
