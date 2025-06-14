import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'MERN Stack',
    skills: [
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original"></i>' },
      { name: 'React.js', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
      
    ],
  },
 
  
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: '<i class="devicon-html5-plain colored"></i>' },
      { name: 'CSS3', icon: '<i class="devicon-css3-plain colored"></i>' },
      { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
      { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
      { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain colored"></i>' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
      { name: 'Java', icon: '<i class="devicon-java-plain colored"></i>' },
      { name: 'C', icon: '<i class="devicon-c-plain colored"></i>' },
    ],
  },
    {
    title:'Frameworks & Databases',
    skills:[
      { name: 'Next.js', icon: '<i class="devicon-nextjs-original"></i>' },
       { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain colored"></i>' },

    ]
  },
  
  {
    title: 'Tools & Software',
    skills: [
      { name: 'VS Code', icon: '<i class="devicon-vscode-plain colored"></i>' },
      { name: 'Figma', icon: '<i class="devicon-figma-plain colored"></i>' },
      { name: 'Excel', icon: '<i class="devicon-microsoftoffice-plain colored"></i>' },
      { name: 'Power BI', icon: '<i class="devicon-microsoftoffice-plain colored"></i>' },
      { name: 'Git', icon: '<i class="devicon-git-plain colored"></i>' },
      { name: 'GitHub', icon: '<i class="devicon-github-original"></i>' },
      { name: 'ShadCN UI', icon: '<i class="devicon-react-original colored"></i>' },
    ],
  },
 
];

const Skills = () => {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <div className="title-wrapper">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-header">
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag"
                    dangerouslySetInnerHTML={{
                      __html: `${skill.icon} <span>${skill.name}</span>`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Skills;
