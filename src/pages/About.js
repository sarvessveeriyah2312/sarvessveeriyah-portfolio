import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/WhatsApp Image 2023-02-03 at 11.31.20 AM.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--gray-2);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sarvess Veeriyah</span>
              </p>
              <h2 className="about__heading">A Software Engineering Student</h2>
              <div className="about__info">
                <PText>
                  I am a Final Year Bachelor of Computer Science student
                  majoring in Software Engineering from Penang, Malaysia. I have
                  acquired a solid foundation in computer science principles,
                  programming concepts, and software development methodologies
                  through my formal education. This includes studying subjects
                  such as data structures, algorithms, software engineering
                  principles, database management, and web development.
                  <br />
                  <br />
                  In addition to my formal education, I have also pursued
                  self-learning as a programmer, which demonstrates my passion
                  and dedication to continuously improve my skills. My
                  self-learning journey may have involved online courses,
                  tutorials, coding exercises, and projects to expand my
                  knowledge and practical experience in various programming
                  languages, frameworks, and tools.
                  <br />
                  <br />
                  As a web developer, I have gained expertise in designing and
                  building websites and web applications using various
                  technologies such as HTML, CSS, JavaScript, and front-end
                  frameworks like React. I may have also gained proficiency in
                  back-end technologies such as server-side scripting languages
                  like PHP, and databases like MySQL or MongoDB. I have
                  experience with version control systems like Git and
                  deployment techniques to host web applications on servers or
                  cloud platforms.
                  <br />
                  <br />
                  As a self-taught programmer and web developer, I have
                  developed problem-solving skills, critical thinking, and the
                  ability to work independently, which are valuable traits in
                  the software development industry. I have also gained
                  experience working on personal projects, contributing to
                  open-source projects, or collaborating with other developers
                  on team projects, which have further enhanced my skills and
                  knowledge.
                  <br />
                  <br />
                  My combined education in software engineering and self-taught
                  programming skills provides me with a strong foundation and
                  practical experience in developing software solutions and
                  building web applications. This unique combination makes me a
                  versatile and competitive candidate for various software
                  engineering roles, including web developer, software engineer,
                  full-stack developer, or front-end/back-end developer, among
                  others. My experience and skills also open up opportunities
                  for me to contribute to the software development community and
                  make a positive impact in the field of web development.
                  <br />
                  <br />
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="/Sarvess Veeriyah_Resume.pdf"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              {/* <AboutInfoItem
                title="July 2022 - Oct 2022"
                items={['Opeator at Jabil ']}
              /> */}
              <AboutInfoItem title="2019-2020" items={['IT TRAINEE']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Bachelor's"
                items={[
                  'Bachelor of Computer Science(Software Engineering)with Honors, University Of Pahang, Malaysia (UMP)',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'NextJS',
                  'TailwindCSS',
                ]}
              />
              <AboutInfoItem title="BackEnd" items={['Node', 'PHP']} />
              <AboutInfoItem
                title="Apps Development"
                items={['Dart', 'Java']}
              />
              <AboutInfoItem
                title="Frameworks"
                items={['Laravel', 'Flutter']}
              />
              <AboutInfoItem
                title="Programming Language"
                items={['Java', 'C++', 'Python']}
              />
              <AboutInfoItem title="Database" items={['MySQL', 'Firebase']} />
              <AboutInfoItem
                title="IDE"
                items={['Visual Studio Code', 'Android Studio']}
              />
              <AboutInfoItem
                title="UI/UX Design"
                items={['Figma', 'Adobe XD', 'Adobe Photoshop']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certifications & Awards</h1>
              <AboutInfoItem
                title=" UMP "
                items={[
                  'Dean List Award 2020/2021',
                  'Dean List Award 2022/2023',
                ]}
              />
              <br />
              <br />
              <AboutInfoItem
                title=" IBM "
                items={[
                  'IBM PYTHON FOR DATA SCIENCE',
                  'MACHINE LEARNING WITH PYTHON- LEVEL 1',
                ]}
              />
              <AboutInfoItem
                title="  "
                items={[
                  'IT FUNDAMENTALS FOR CYBERSECURITY',
                  'CYBERSECURITY ANALYST',
                ]}
              />
              <br />
              <AboutInfoItem
                title="GOOGLE"
                items={['GOOGLE IT SUPPORT CERTIFICATION']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
