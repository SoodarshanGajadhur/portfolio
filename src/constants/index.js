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
  imaginecities,
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
    title: "Software Developer",
    company_name: "INVIDI Technologies Corporation",
    icon: invidi,
    iconBg: "#383E56",
    date: "May 2022 - Jul 2025",
    points: [
      "Designed, developed, and deployed scalable, distributed microservices on AWS using ECS Fargate, SQS, Lambda, DynamoDB and other AWS services.",
      "Built REST APIs and integrated microservices using Python and Kotlin, enabling secure and efficient communication between systems.",
      "Led AWS cost-optimization efforts, reducing monthly expenses by 30% without impacting performance.",
      "Built and maintained data pipelines to ingest data into Amazon S3, transform it, and load it into Amazon Aurora, enabling reliable data processing for downstream applications.",
      "Resolved 10+ high-priority production incidents during on-call support, improving resolution time by 80% through root cause analysis and actionable documentation.",
      "Collaborated with product owners to gather requirements and implement robust, testable features aligned with product needs.",
      "Utilized Terraform as an Infrastructure as Code solution for provisioning and managing our AWS infrastructure.",
      "Interned from May 2022 to April 2024, then transitioned to full-time role in October 2024.",
    ],
  },
  {
      title: "Full Stack Developer Intern",
      company_name: "Imagine Cities",
      icon: imaginecities,
      iconBg: "#383E56",
      date: "Jan 2022 - Apr 2025",
      points: [
        "Led a team of 5 to design, develop and deploy an Online Learning Web Application using Django, Python, PostgreSQL and Docker, leading to a 30% increase in user engagement.",
        "Delivered high-quality web UIs using HTML, CSS, and JavaScript, focusing on accessibility and responsiveness.",
        "Implemented automated unit and integration tests, reducing UI bugs and accelerating delivery.",
        "Worked closely with clients to gather feedback and implement iterative improvements aligned with user needs.",
      ],
    },
  {
    title: "Teaching Assistant",
    company_name: "University of Alberta",
    icon: uofa,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Graded RISC-V coding assignments for 150+ students providing timely, constructive feedback.",
      "Improved my public speaking skills by delivering 6 full lab presentations to classrooms of 30 students each.",
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