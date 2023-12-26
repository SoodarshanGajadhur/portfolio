import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  docker,
  endtoend,
  uofa,
  invidi,
  learningguides,
  habittracking,
  spaceshooter,
  threejs,
  python,
  kotlin,
  java,
  cpp,
  c,
  bootstrap,
  django,
  postgresql,
  firebase,
  amazonredshift,
  kubernetes,
  terraform,
  snyk,
  datadog,
  jira,
  sonarqube,
  aws,
  github,
  bitbucket,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Agile Development",
    icon: backend,
  },
  {
    title: "Infrastructure as Code",
    icon: creator,
  }
];

const technologySections = ["Programming Languages", "Web Development", "Database", "DevOps", "Other Tools"];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    section: technologySections[1]
  },
  {
    name: "CSS 3",
    icon: css,
    section: technologySections[1]
  },
  {
    name: "JavaScript",
    icon: javascript,
    section: technologySections[0]
  },
  {
    name: "Python",
    icon: python,
    section: technologySections[0]
  },
  {
    name: "Kotlin",
    icon: kotlin,
    section: technologySections[0]
  },
  {
    name: "Java",
    icon: java,
    section: technologySections[0]
  },
  {
    name: "C++",
    icon: cpp,
    section: technologySections[0]
  },
  {
    name: "C",
    icon: c,
    section: technologySections[0]
  },
  {
    name: "React JS",
    icon: reactjs,
    section: technologySections[1]
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    section: technologySections[1]
  },
  {
    name: "Node JS",
    icon: nodejs,
    section: technologySections[1]
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    section: technologySections[2]
  },
  {
    name: "MongoDB",
    icon: mongodb,
    section: technologySections[2]
  },
  {
    name: "Amazon Redshift",
    icon: amazonredshift,
    section: technologySections[2]
  },
  {
    name: "Firebase",
    icon: firebase,
    section: technologySections[2]
  },
  {
    name: "Three JS",
    icon: threejs,
    section: technologySections[1]
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    section: technologySections[1]
  },
  {
    name: "Django",
    icon: django,
    section: technologySections[1]
  },
  {
    name: "Docker",
    icon: docker,
    section: technologySections[3]
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
    section: technologySections[3]
  },
  {
    name: "Terraform",
    icon: terraform,
    section: technologySections[3]
  },
  {
    name: "Datadog",
    icon: datadog,
    section: technologySections[3]
  },
  {
    name: "Jira Software",
    icon: jira,
    section: technologySections[3]
  },
  {
    name: "Sonarqube",
    icon: sonarqube,
    section: technologySections[3]
  },
  {
    name: "Snyk",
    icon: snyk,
    section: technologySections[3]
  },
  {
    name: "Github",
    icon: github,
    section: technologySections[4]
  },
  {
    name: "Bitbucket",
    icon: bitbucket,
    section: technologySections[4]
  },
  {
    name: "Amazon Web Services",
    icon: aws,
    section: technologySections[4]
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "INVIDI Technologies Corporation",
    icon: invidi,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2023",
    points: [
      "Demonstrated hands-on experience in DevOps/Agile operations, including proficient utilization of essential tools such as code review, unit test automation, build and release automation, and incident management.",
      "Demonstrated leadership capabilities by mentoring and guiding two new interns within the team, and contributing to their successful integration.",
      "Enhanced presentation skills through regular delivery of sprint reviews to key stakeholders, showcasing team progress and, delivered a company-wide presentation to celebrate the accomplishments of the team.",
      "Exhibited problem-solving skills during on-call incidents, promptly resolving issues and documenting postmortem/RCA reports to prevent future recurrences.",
      "Utilized Terraform as an Infrastructure as Code solution for provisioning and managing our AWS infrastructure.",
      "Leveraged Datadog for proactive system performance monitoring, including alerts and log monitoring for a better understanding and operation of the system.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University of Alberta",
    icon: uofa,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Worked as undergrad teaching assistant for CMPUT 229 - Computer Organization and Architecture I for Fall 2021 term.",
      "Graded RISC-V coding lab assignments and homework assignments for 150+ students on time and contributed in grading midterm and final.",
      "Improved my public speaking skills by delivering 6 full lab presentations to classrooms of 30 students each.",
      "Improved my people skills by providing feedback and guiding students with the lab assignments each week.",
    ],
  },
  {
    title: "Intern",
    company_name: "End to End Solution Ltd",
    icon: endtoend,
    iconBg: "#383E56",
    date: "May 2021 - Jul 2021",
    points: [
      "Regularly uploaded new product contents onto its e-commerce website through WordPress CMS.",
      "Used web scrapping tools to scrape competitors website for product prices and implemented a Python script that compares those prices and automatically establishes our selling prices accordingly, resulting in 20% increase in online sales.",
      "Tested and documented several new features like data analytics, product management and marketing automations technologies to enhance the e-commerce platform.",
      "Answered incoming sales calls professionally, tactfully and per procedures, positively promoting our product to customers.",
    ],
  }
];

const projects = [
  {
    name: "Learning Guides Web App",
    description:
      "An online learning platform for a non-profit organization that allows users to access digital learning guides which provide creative approaches to improving the community.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: learningguides,
    source_code_link: "https://www.imaginecities.com/learning-guides/",
  },
  {
    name: "Habit Helper",
    description:
      "Habit Helper is a user-friendly and intuitive mobile application designed to help you track and cultivate healthy habits in your daily life.",
    tags: [
      {
        name: "androidstudio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "google-maps-api",
        color: "orange-text-gradient",
      }
    ],
    image: habittracking,
    source_code_link: "",
  },
  {
    name: "Two-Player Space Shooter Game",
    description:
      "First year project building a multi-player space shooter game using 2 Arduinos with TFT-displays connected head-to-head.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
      {
        name: "tft-display",
        color: "pink-text-gradient",
      },
      {
        name: "oop",
        color: "orange-text-gradient",
      },
    ],
    image: spaceshooter,
    source_code_link: "https://github.com/Soodarshan-Gajadhur/Arduino-Space-Shooter-Game",
  },
];

export { services, technologies, technologySections, experiences, projects };