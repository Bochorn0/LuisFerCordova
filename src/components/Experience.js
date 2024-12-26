import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Paystand",
      role: "Software Engineer Sr.",
      period: "February 2022 - Present",
      responsibilities: [
        "Sage Intacct ERP C2C, And Oracle NetSuite ERP Accounts Receivable Management",
        "Implementation and maintenance of API Rest services and creation of custom Scripts and plugins",
        "Bank reconciliation and account clearance, for Journals and check - invoice payment administration",
        "Develop new product front and back features, deployments and microservices Development with Elixir",
        "Software Architecture, Diagrams Modeling and Docs, Agile methodologies, Customer support and help desk tickets"
      ]
    },
    {
      company: "CT Internacional Del Noroeste",
      role: "Full Stack Developer",
      period: "December 2014 - February 2022",
      responsibilities: [
        "Ecommerce support and maintenance",
        "In-house application development for product pricing/discounts strategies and funds management",
        "Tax documents management and bank payments matching and reconciliation",
        "API REST/SOAP secure integration between product providers with a multibranch Ecommerce site",
        "Server management and issues solving for safe deployments delivery with multiple environments",
        "Team leader and project manager for small features and custom build features"
      ]
    },
    {
      company: "Campestre El Retiro",
      role: "Full Stack Web Developer and Project Manager",
      period: "May 2018 - March 2019",
      responsibilities: [
        "Project manager and roadmap administration for an integral tool and web view mobile application",
        "Amortization panel custom build app, land credit payments management tool, and site content edition",
        "User/Roles customization features with payroll payment system"
      ]
    },
    {
      company: "KM Solución",
      role: "Developer Consultant",
      period: "January 2014 - December 2014",
      responsibilities: [
        "Business support and integral consulting for customer needs",
        "Marketing, social media and technology KPI manager",
        "Jr. Web developer and consultant, for over 10 customers with CMS customizable sites"
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.company}</h3>
          <p className="role">{exp.role}</p>
          <p className="date">{exp.period}</p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience; 