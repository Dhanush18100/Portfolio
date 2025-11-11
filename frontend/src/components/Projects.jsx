import React from 'react';
import './Projects.css';



const projects = [
  {
    title: 'E-commerce+Admin',
    description:
      'A full-stack eCommerce website built using the MERN stack, featuring user authentication, product management, and a powerful admin dashboard for real-time order and inventory control.',
    image:'https://static.vecteezy.com/system/resources/previews/000/270/486/non_2x/vector-online-shopping-web-banner.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/rabbit.git',
    liveLink: 'https://rabbit-frontend-0und.onrender.com',
  },
   {
    title: 'Real time chatting application',
    description:
      'A real-time chatting application built using the MERN stack, Socket.io, and Tailwind CSS for seamless messaging and responsive UI.',
   image:'https://img.freepik.com/premium-vector/chat-app-smartphone-messenger-communication-application-ui-templates-with-sign-messaging-contacts-screens-collection-mobile-interfaces-with-buttons-vector-phones-set_176516-3076.jpg?w=2000',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Socket.io','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/ChatX.git',
    liveLink: ' https://chatx-e7ya.onrender.com',
  },
  {
    title: 'AI-Interview Mocker',
    description:
      'An AI-based interview system that simulates real-time mock interviews using intelligent question generation, voice/text interaction, and performance feedback to help users prepare effectively for job interviews.',
   image:'https://thumbs.dreamstime.com/z/ai-stealing-our-jobs-ai-job-interview-generative-ai-ai-getting-interviewed-job-ai-taking-our-jobs-office-robot-machine-274169270.jpg',
    tags: ['Next.js', 'Drizzle ORM', 'Gemini AI', 'Clerk'],
    githubLink: 'https://github.com/Dhanush18100/AI_Mock_Interview.git',
    liveLink: 'https://ai-mock-interview-zeta-lilac.vercel.app',
  },
  {
    title: 'Doctor Appointment',
    description:
      'A full-stack MERN application that allows patients to book and manage doctor appointments online, with secure authentication and role-based dashboards for doctors ,admin and patients.',
    image:'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/CareConnect.git',
    liveLink: 'https://github.com/Dhanush18100',
  },
  {
     title: 'QuickGPT',
    description:
      'An AI-powered chat application built with the MERN stack that enables users to interact with an intelligent chatbot for instant answers and task assistance.',
    image:'https://tse4.mm.bing.net/th/id/OIP.yi3qtV520pDYsFpmS2gcTgHaGK?pid=Api&P=0&h=180',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss','Gemini AI'],
    githubLink: 'https://github.com/Dhanush18100/QuickGPT.git',
    liveLink: 'https://quick-gpt-mauve-three.vercel.app/',
  }
 
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-content">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src =
                      'https://placehold.co/400x200/e9ecef/495057/png?text=Project+Image';
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <svg className="link-icon" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <svg className="link-icon" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
