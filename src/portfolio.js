import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration Section
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Soumya Darshan Pattanaik",
  title: "Hi all, I'm Soumya",
  subTitle: emoji(
    "Senior Programmer specializing in Unreal Engine, AR/VR simulations, and AI integration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Darshan1613",
  linkedin: "https://www.linkedin.com/in/soumya-darshan-pattanaik-9a252b1b5/",
  gmail: "soumyadarshanpattanaik.66@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "GAME & SIMULATION DEVELOPER WITH AI EXPERTISE",
  skills: [
    emoji(
      "⚡ Develop interactive environments in Unreal Engine using C++ and Blueprints"
    ),
    emoji("⚡ Build realistic AR/VR simulations with Unity and Unreal Engine"),
    emoji("⚡ Integrate AI/LLMs using Nvidia ACE and custom architectures"),
    emoji(
      "⚡ Deploy scalable solutions on AWS with Pixel Streaming and WebSockets"
    )
  ],
  softwareSkills: [
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Unreal Engine", fontAwesomeClassname: "fas fa-gamepad"},
    {skillName: "Unity", fontAwesomeClassname: "fas fa-vr-cardboard"},
    {skillName: "WebSockets", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Nvidia ACE", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "LLMs", fontAwesomeClassname: "fas fa-brain"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Centurion University of Technology and Management",
      logo: require("./assets/images/cutmLogo.png"),
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "August 2018 - May 2022",
      desc: "Focused on AR/VR and game development.",
      descBullets: []
    }
  ]
};

// Proficiency / Skill Bars
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Game Development", progressPercentage: "90%"},
    {Stack: "AR/VR Simulation", progressPercentage: "85%"},
    {Stack: "AI & LLM Integration", progressPercentage: "80%"},
    {Stack: "Cloud Deployment", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Core Team Member",
      company: "Griphic",
      companylogo: require("./assets/images/griphicLogo.png"),
      date: "December 2023 - Present",
      desc: "Managed the technical team for the complete development pipeline at Cerebrus, creating a Metahuman avatar for runtime interviews with WebSockets and Nvidia ACE."
    },
    {
      role: "Senior Programmer",
      company: "SKETS Studio",
      companylogo: require("./assets/images/sketsLogo.png"),
      date: "August 2023 - Present",
      desc: "Develop Unreal Engine applications, optimize performance, and integrate AI-driven features."
    },
    {
      role: "Programmer",
      company: "Queppelin",
      companylogo: require("./assets/images/queppelinLogo.png"),
      date: "May 2022 - July 2023",
      desc: "Led AR/VR simulation and game projects, coordinating cross-functional teams and ensuring timely delivery."
    },
    {
      role: "Game Developer",
      company: "Datalogy Software",
      companylogo: require("./assets/images/datalogyLogo.png"),
      date: "October 2021 - May 2022",
      desc: "Built a semi-open world sword combat game with real-time multiplayer using AWS GameLift."
    },
    {
      role: "Freelance Game Developer",
      company: "Self Employed",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "January 2020 - October 2021",
      desc: "Developed prototype games (combat, open-world) for clients using Unreal Engine and custom gameplay mechanics."
    }
  ]
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects and Simulations I've Developed",
  projects: [
    {
      image: require("./assets/images/vr_solar_logo.png"),
      projectName: "VR Solar Panel Installation - UE",
      projectDesc:
        "Immersive VR training for solar panel setup in Unreal Engine.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://youtu.be/kddEKbPHbRg?si=t3YwckDEIafEkmiF"
        }
      ]
    },
    {
      image: require("./assets/images/cerebrus_logo.png"),
      projectName: "Cerebrus - Runtime Interview Avatar",
      projectDesc:
        "Managed development pipeline for a Metahuman avatar powered by LLMs and WebSockets.",
      footerLink: [
        {name: "Explore", url: "https://cerebrus.griphic.com/how-to-use"}
      ]
    },
    {
      image: require("./assets/images/supermarket_logo.png"),
      projectName: "Metaverse Supermarket - UE",
      projectDesc: "Created a virtual supermarket simulation in Unreal Engine.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://youtu.be/9M0kN9xKEOE?si=0hviCpF0x9Eouh_j"
        }
      ]
    },
    {
      image: require("./assets/images/vr_agri_logo.png"),
      projectName: "VR Agriculture Simulation - Unity",
      projectDesc: "Interactive farming simulation built in Unity.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://youtu.be/PYdbn2UIN34?si=Zz-WMy-P1EWSlkBd"
        }
      ]
    },
    {
      image: require("./assets/images/vr_drone_logo.png"),
      projectName: "VR Drone Simulator - Unity",
      projectDesc: "Realistic drone flight training simulation in Unity.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://youtu.be/W7xqSQCGWKY?si=JKZJhrGlApYb7muo"
        }
      ]
    },
    {
      image: require("./assets/images/guardian_logo.png"),
      projectName: "Guardian Victor - UE",
      projectDesc: "Action combat game built in Unreal Engine.",
      footerLink: [{name: "Watch Video", url: "https://youtu.be/M2pGE1KsZYQ"}]
    },
    {
      image: require("./assets/images/meta_combat_logo.png"),
      projectName: "Meta Combat - UE",
      projectDesc: "Multiplayer combat simulation in Unreal Engine.",
      footerLink: [{name: "Watch Video", url: "https://youtu.be/WSrJHLwcXu8"}]
    },
    {
      image: require("./assets/images/zodiak_logo.png"),
      projectName: "Zodiac Card Game - UE",
      projectDesc: "Digital card game experience in Unreal Engine.",
      footerLink: [{name: "Watch Video", url: "https://youtu.be/6CGwilecwlA"}]
    },
    {
      image: require("./assets/images/1971_logo.png"),
      projectName: "1971 - Indian Naval Front (Steam)",
      projectDesc:
        "Developed flight mechanics code for realistic naval aviation simulation.",
      footerLink: [
        {
          name: "View on Steam",
          url: "https://store.steampowered.com/app/957950/1971_Indian_Naval_Front/"
        }
      ]
    },
    {
      image: require("./assets/images/tridasha_logo.png"),
      projectName: "Tridasha",
      projectDesc: "Created core gameplay mechanics.",
      footerLink: [{name: "Watch Video", url: "https://youtu.be/gG0j1OqrXAE"}]
    }
  ],
  display: true
};

// Additional Sections Stubs
const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just say hi. My inbox is open!",
  number: "+91-9348791875",
  email_address: "soumyadarshanpattanaik.66@gmail.com"
};

const openSource = {showGithubProfile: true, display: false};
const achievementSection = {display: false};
const blogSection = {display: false};
const talkSection = {display: false};
const resumeSection = {display: false};
const podcastSection = {display: false};
const twitterDetails = {display: false};
const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  resumeSection,
  podcastSection,
  twitterDetails,
  isHireable
};
