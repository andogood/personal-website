import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Goodman | Javascript Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Prize recipient of the App Idea Challenge at my University. After being inspired by my local start-up scene, I decided to become a developer. Welcome to my Website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Andrew Goodman',
  subtitle: 'Creative. Ambitious. Eager to learn.',
  cta: 'Ready for Employment <Click Here or Scroll Down>',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I decided to become a developer after being inspired by my local start-up scene.',
  paragraphTwo: 'Prize recipient of the App Idea Challenge at my University, I can see the big picture and have the tenacity to figure out the details.',
  paragraphThree: 'I  have been developing my full-stack Javascript development skills and would love to show you what I\'ve been working on!',
  resume: 'https://drive.google.com/file/d/10OLz0jR2veO2Efv1PSram-Ra_LkudeTX/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mr. Coffee Website',
    info: 'A Fake Website, I worked on during the INCO Academy Javascript Full-Stack Development Course. Created using HTML and CSS.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mr. Coffee Database System',
    info: 'Created during INCO Academy Javascript Full-Stack Development Course. NODE, Express, MYSQL CRUD App. It\'s an app that allows you to insert and see a schedule. It also has a login system.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'More Projects Coming Soon',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to shoot me an email',
  btn: 'Email',
  email: 'harlo1@tutanota.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/andrewgoodman01/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andogood',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
