// Experiences.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Experiences() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "HCL Tech",
      date: "08/2023 – Present",
      location: "Remote, USA",
      description: [
        "Utilize React to implement a smooth and intuitive checkout process, aiming for a 10% increase in conversion rate through UI/UX enhancements and performance optimizations.",
        "Develop dynamic filtering and sorting functionalities using React and JavaScript to achieve a 13% decrease in bounce rate, facilitating easier product discovery.",
        "Utilize AWS Amazon CloudFront for content delivery network (CDN) distribution, and AWS Lambda for serverless computing to optimize frontend performance.",
        "Implement a robust CI/CD pipeline to facilitate frequent updates and improvements, ensuring the agility to respond swiftly to user feedback and evolving market trends.",
        "Utilize GitLab, alongside proficiency in frontend skills, for version control and seamless collaboration among team members throughout the A/B testing process for e-commerce platform.",
      ]
    },
    {
      title: "Frontend Developer",
      company: "Genpact",
      date: "02/2021 – 08/2022",
      location: "Hyderabad, India",
      description: [
        "Developed and maintained responsive web applications tailored to the financial, utilizing React.js with Redux resulting in enhanced financial data visualization and improved client engagement.",
        "Collaborated closely with backend developers to seamlessly integrate frontend interfaces with complex financial APIs, ensuring secure data transmission and compliance with industry regulations.",
        "Utilized AWS to transform intricate UI/UX designs provided by the design team into pixel-perfect implementations, while prioritizing usability and accessibility standards specific to the financial sector.",
        "Optimized SQL database queries resulting in a 30% reduction in average query execution time, thereby significantly improving application performance of financial data with minimal latency.",
        "Implemented Docker containers to streamline frontend financial application deployment and scalability, resulting in a 50% reduction in deployment time, enhancing overall project efficiency and maintainability.",
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "New Jersey Institute of Technology",
      date: "09/2022 – 12/2023",
      location: "New Jersey, USA"
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "Osmania University",
      date: "08/2018 – 05/2022",
      location: "Hyderabad, India"
    }
  ];

  const skills = {
    languages: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Redux", "Vue.js", "Angular.js", "AJAX", "Bootstrap", "JQuery"],
    backend: ["Node.js", "Express", "MongoDB", "MySQL", "SQL Server", "Webpack", "Postman", "WebPack"],
    others: ["Amazon Web Services", "Docker", "Git", "GitHub", "Jenkins", "Figma", "Adobe Photoshop", "Sketch", "Jest", "React Testing Library", "Enzyme", "React Router", "React DevTools", "Next.js"]
  };

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My Professional <strong className="purple">Experiences</strong>
        </h1>
        <section id="profile">
          <h2>Profile</h2>
          <p>
            Skillful Frontend Developer with 2 years of experience crafting dynamic, engaging UIs using JavaScript and React. Proven track record building and maintaining high-traffic web applications, optimizing for both performance and user experience. Possesses strong proficiency in state management, testing, and accessibility best practices. Excellent in teamwork, communication skills and fostering collaboration.
          </p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <Row>
            <Col>
              <h3>Languages</h3>
              <ul>
                {skills.languages.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </Col>
            <Col>
              <h3>Frontend</h3>
              <ul>
                {skills.frontend.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </Col>
            <Col>
              <h3>Backend</h3>
              <ul>
                {skills.backend.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </Col>
            <Col>
              <h3>Others</h3>
              <ul>
                {skills.others.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </Col>
          </Row>
        </section>
        <section id="professional-experience">
          <h2>Professional Experience</h2>
          {experiences.map((exp, idx) => (
            <Row key={idx} className="experience-card">
              <Col md={12}>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <h5>{exp.date} | {exp.location}</h5>
                <ul>
                  {exp.description.map((desc, index) => <li key={index}>{desc}</li>)}
                </ul>
              </Col>
            </Row>
          ))}
        </section>
        <section id="education">
          <h2>Education</h2>
          {education.map((edu, idx) => (
            <Row key={idx} className="education-card">
              <Col md={12}>
                <h3>{edu.degree} in {edu.field}</h3>
                <h4>{edu.institution}</h4>
                <h5>{edu.date} | {edu.location}</h5>
              </Col>
            </Row>
          ))}
        </section>
      </Container>
    </Container>
  );
}

export default Experiences;
