import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ICT INTERN",
    company_name: "REGENT MANAGEMENT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2022 ",
    points: [
      "Enhanced user interface resulting in 20% increase in user engagement, driving product sustainability and continuous improvement.",
      "Proficient in relational database systems and Object-Oriented Programming(OOP) principles, facilitating the development of dynamic and data-driven web applications.",
    "Proficient in frontend technologies including TypeScript, React, GraphQL, and Tailwind, with a track record of leveraging these tools to develop polished user Interfaces and enhance user experiences.",
    "Worked with cross-functional teams to develop and integrate software features,leading to a 15% improvement in product efficiency and scalability",
  ],
  },
  {
    title: "JUNIOR SOFTWARE DEVELOPER",
    company_name: "SYSTEM REENGINEERED LIMITED",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2022 - August 2022 ",
    points: [
      "Implementing Dependency Injection and Repository Design Patterns in ASP.NET CORE",
      "Demonstrated proficiency in developing applications using C# and WPF, as well as familiarity with other desktop application frameworks",
      "Experienced in utilizing backend technologies such as Postgres, Redis, and GraphQL, with adaptability to work with other backend languages and frameworks as required.",
      "Microsoft Dynamics NAV ERP functional processes. Developed and maintained high-quality software solutions, meeting project requirements and timelines.",
    ],
  },
  {
    title: "PROJECT MANAGER INTERN",
    company_name: "NG-CDF MACHAKOS TOWN ",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "Built and developed project teams, enhancing performance by providing clear purpose, direction, and motivation, which increased overall team productivity by 15%",
      "Analyzed project status and revised scope, schedule, or budget as necessary,ensuring project requirements were met and reducing project overruns by 20%.",
      "Established and maintained relationships with client stakeholders, providing day-today contact on project status and changes, which led to a 30% improvement in client satisfaction scores",
      "Structured and managed integrated, multitrack performance databases for digital print, social, broadcast, and experiential projects, improving data accessibility and utilization by 25%.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Muchira proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Muchira does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Muchira optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
