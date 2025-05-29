import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>

        <div className="about-text">
          <div className="about-card">
            <p>
              Hello! I'm a passionate Full Stack Developer with a strong foundation in web development
              and a keen eye for creating user-friendly applications. My journey in programming
              began with a curiosity to understand how things work in the digital world, and it has
              evolved into a professional career where I bring ideas to life through code.
            </p>
            <p>
              I specialize in building full-stack web applications, combining both frontend and
              backend technologies to create seamless user experiences. My approach to development
              focuses on writing clean, efficient code while ensuring the end product is both
              functional and intuitive.
            </p>
            <p>
              When I'm not coding, I enjoy staying up-to-date with the latest technology trends,
              participating in tech communities, and contributing to open-source projects. I believe
              in continuous learning and am always excited to take on new challenges that push my
              boundaries as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
