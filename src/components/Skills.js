import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Programming Tools</h3>
          <ul>
            <li>Nodejs</li>
            <li>PHP</li>
            <li>Typescript</li>
            <li>ReactJS</li>
            <li>AngularJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Kafka</li>
            <li>Bash</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DB Management</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLServer</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Management Tools</h3>
          <ul>
            <li>Jira</li>
            <li>Microsoft TFS</li>
            <li>Asana</li>
            <li>GitLab</li>
            <li>AWS</li>
            <li>Sage Intacct</li>
            <li>Oracle Netsuite</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills; 