import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,budget,
  html,newsmonkey,
  css,cpp,express,sql2,java,python,c,
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
  textutils
} from "../assets";
import { FaVoteYea, FaUserShield, FaUsers, FaChartPie } from 'react-icons/fa';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "feedbacks",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend",
    icon: web,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Backend Developer",
    icon: backend,
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
  },
  {
    title: "Data Structures and Algorithms",
    icon: creator,
    skills: ["Leetcode"],
    link: "https://leetcode.com/u/vansh_2345/", // replace with your actual link
  },
  {
    title: "Tools & Platforms",
    icon: creator, // You can use a better-suited icon here if available
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "SQL",
    icon: sql2,
  },
  {
    name:"Express JS",
    icon:express,
  },
  {
    name:"Docker",
    icon:docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"Cpp",
    icon:cpp,
  },{
    name:"python",
    icon:python,
  },{
    name:"Java",
    icon:java,
  },{
    name:"C#",
    icon:c,
  }
];

const experiences = [
{
  "title": "Full Stack Developer (Freelance Project)",
  "company_name": "Online Voting Platform",
  "icon": FaVoteYea,
  "iconBg": "#383E56",
  "date": "May 2025 - June 2025",
  "points": [
    "Developed a complete online voting system using fullstack.",
    "Implemented secure user login, one-vote-per-user logic, and post-election statistics.",
    "Created a fully responsive dark-themed interface with smooth navigation and charts."
  ]
}

,
 {
  "title": "Frontend & Backend Development",
  "company_name": "Self-Taught Developer",
  "icon": FaUserShield,
  "iconBg": "#383E56",
  "date": "2024 - Present",
  "points": [
    "Learning and applying full-stack development using MERN Stack.",
    "Built multiple projects integrating modern UI/UX and backend APIs.",
    "Actively exploring deployment platforms like Vercel and GitHub Pages."
  ]
}
,
];

const testimonials = [
];

const projects = [
  {
    name: "Text-Utils",
    description:
      "Text-Utils is a fast and simple React app to analyze and manipulate your text. Convert case, remove spaces, copy text, count words and characters, and switch themes — all in one clean, responsive interface. Perfect for writers, coders, and editors!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/Vansh-91/Text-Utils",
  },
  {
    name: "Newsmonkey",
    description:
      "NewsMonkey is a modern React-based news application that delivers the latest headlines from various categories using NewsAPI. It features dynamic routing, infinite scrolling, responsive UI, and category-based filtering for a seamless reading experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Newsapi",
        color: "green-text-gradient",
      },
    ],
    image: newsmonkey,
    source_code_link: "https://github.com/Vansh-91/NewsMonkey",
  },
  {
    name: "Budget Planner",
    description:
      "A sleek and powerful Budget Planner app to manage your expenses and income with ease. Track transactions, set category-wise limits, visualize trends with charts, and gain insights — all in a dark-themed, responsive interface built using ASP.NET Core and Chart.js.",
    tags: [
      {
        name: "JavaScript",
        color: "Red-text-gradient",
      },
      {
        name: " C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },

    ],
    image: budget,
    source_code_link: "https://github.com/Vansh-91/BudgetPlanner/",
  },
];

export { services, technologies, experiences, testimonials, projects };