import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `
I am a dedicated full stack developer with a talent for creating robust and scalable web applications. With around three years of practical experience, I have developed expertise in front-end technologies such as React.js, HTML, and CSS, as well as back-end technologies including Node.js, and databases like MySQL and MongoDB. I also have experience in cloud computing and have worked extensively with various AWS services. My aim is to leverage my skills to develop innovative solutions that enhance business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `Hey there! I’m Atharva Konge, hailing from Nagpur, a city right in the heart of India.
 I'm currently pursuing my graduate studies in Software Engineering at Northeastern University, where I've maintained a perfect 4.0 GPA. I earned my bachelor’s degree from Yeshwantrao Chavan College of Engineering in Nagpur.

 During my 2.5 years at a startup called Success Numbers, I collaborated with top firms like Deloitte, Oracle, and Estée Lauder, gaining valuable experience across diverse technical domains such as front-end, back-end, and cloud computing. In my free time, I enjoy playing strategy games like chess, Polytopia, and Age of Mythology, as well as outdoor sports like soccer. I’m also an avid reader.

Right now, I'm on the lookout for an internship or a co-op position. I’m particularly interested in full stack or cloud roles but am open to exploring other tech areas too. If my profile piques your interest, feel free to get in touch!`;

export const EXPERIENCES = [
  {
    year: "Feb 2021 - Aug 2023",
    role: "Software Engineer",
    company: "Success Numbers",
    description: `I collaborated with a team to develop B2B applications in the e-commerce sector using the OSF framework (React-based). My focus included refactoring code to boost performance significantly, streamlining processes to prevent redundant API calls and unnecessary UI updates. Additionally, I optimized delivery management systems by leveraging AWS Lambda functions, SQS, SNS, JavaScript, and DynamoDB to create multiple APIs. I also contributed to minimizing downtime and resolving numerous production issues through effective testing and real-time incident resolution.`,
    technologies: ["React.js", "Node.js", "AWS", "Javascript"],
  },
  {
    year: "Jan 2021 - Feb 2021",
    role: "Associate Software Engineering Intern",
    company: "Success Numbers",
    description: `I led the development of an order history and summary dashboard for an e-commerce application, overseeing operations handling a high volume of daily orders. Additionally, I implemented multiple modules to manage essential aspects such as returns, exchanges, discounts, payments, order tracking, and inventory monitoring.`,
    technologies: ["React.js", "Javascript"],
  },
  {
    year: "Jan 2020 - Jun 2020",
    role: "Software Engineer Intern",
    company: "Tech Mahindra",
    description: `I significantly improved the code coverage for three sub-modules within the Order Management module, achieving over 90% coverage through the use of JUnit and Mockito for testing. Moreover, I boosted efficiency in business process management by incorporating 'flowable', a flexible business process engine.`,
    technologies: ["Java", "Flowable", "JUnit", "Mockito", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Event Management Application",
    image: project1,
    description:
      "This web application is designed for students to register for events and allows organizations to create and publish events. Organizers can monitor participant registration numbers. It also includes login functionality and provides the ability to filter events by category. The site boasts an elegant and intuitive interface.",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "Redux", "JWT"],
  },
  {
    title: "Hotel Booking Application",
    image: project2,
    description:
      "This full-stack web application is designed to help users find and book accommodations, including hotels, apartments, and villas. Users can input their desired dates, city, and the number of guests to discover available options. The application allows users to select a hotel and, depending on availability, proceed to book their stay..",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "Redux", "JWT"],
  },
  {
    title: "Netflix Clone",
    image: project3,
    description:
      "This web application is built using React.js for the frontend, Node.js and Express for the backend, and MongoDB for database storage. The application fetches movie data from The Movie Database (TMDb) API and utilizes CRUD operations for user authentication.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Context API",
      "Sass",
      "CryptoJS",
    ],
  },
  {
    title: "Admin Dashboard",
    image: project4,
    description:
      "This web application is designed for administrators to manage events, users, and transactions related to Husky Events. The dashboard features a sleek and user-friendly interface with both dark mode and light mode options.",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "Redux", "JWT"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
