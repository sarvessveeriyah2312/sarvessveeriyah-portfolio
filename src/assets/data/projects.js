import { v4 as uuidv4 } from 'uuid';
import CoinTrackerImg from '../images/cointracker.jpg';
import studentms from '../images/studentms.png';
import portfolio from '../images/portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'LinkPro',
    desc:
      'Linkpro is an alternative of linktree build on Reactjs and Taliwind CSS hosted on Github Pages.',
    img: CoinTrackerImg,
    link: '//sarvessveeriyah2312.github.io/linkpro/',
  },
  {
    id: uuidv4(),
    name: 'Student Management System',
    desc:
      'StudentMS, short for Student Management System, is a software application or platform that is designed to streamline and automate the administrative and academic processes related to managing students in an educational institution.',
    img: studentms,
    link:
      '//github.com/sarvessveeriyah2312/QR-Attendance-Student-Management-System-PHP-MySQL',
  },
  {
    id: uuidv4(),
    name: 'React Js Portfolio Website',
    desc:
      'A React JS portfolio website is a website that is built using React, a popular JavaScript library for building user interfaces, and is specifically designed to showcase a my portfolio. It serves as a digital resume where I can display their skills, projects, and achievements to potential employers.',
    img: portfolio,
    link: '//github.com/sarvessveeriyah2312/Portfolio-with-Reactjs',
  },
];

export default projects;
