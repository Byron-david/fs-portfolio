import React from 'react';
import styles from './css/Portfolio.module.css';
import Section from './Section';
import website1 from "../assets/website1_cropped.png";

const projects = [
  {
    id: 1,
    title: "Technical Artist Portfolio",
    description: "A portfolio website for displaying artistic works.",
    image: website1, // Ensure this exists in your public folder
    tech: ["Flask", "Python", "JS"],
    link: "https://github.com/username/project1"
  },
  {
    id: 2,
    title: "Stock Option Tracker",
    description: "An interface for Oculus Quest 2 ensuring smooth hardware communication.",
    image: website1,
    tech: ["React", "Node", "Express"],
    link: "https://github.com/username/project2"
  },
  {
    id: 3,
    title: "Technical Artist Portfolio",
    description: "A portfolio website for displaying artistic works.",
    image: website1, // Ensure this exists in your public folder
    tech: ["Flask", "Python", "JS"],
    link: "https://github.com/username/project1"
  },
  {
    id: 4,
    title: "Stock Option Tracker",
    description: "An interface for Oculus Quest 2 ensuring smooth hardware communication.",
    image: website1,
    tech: ["React", "Node", "Express"],
    link: "https://github.com/username/project2"
  }
];

const Portfolio = () => {
  return (
    <Section title="Portfolio" id ="portfolio" className={styles.container}>
      
        <div className={styles.grid}>
            {projects.map((project) => (
                <article key={project.id} className={styles.card}>
                    {/* Left Side: Image */}
                    <div className={styles.imageContainer}>
                        <img 
                        src={project.image} 
                        alt={`Screenshot of ${project.title}`} 
                        className={styles.image} 
                        />
                    </div>

                    {/* Right Side: Text */}
                    <div className={styles.content}>
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                        
                        <div className={styles.techStack}>
                        {project.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                        </div>

                        <div className={styles.linkContainer}>
                            <a href={project.link} className={styles.link}>Live Demo</a>
                            <a href={project.link} className={styles.link}>GitHub</a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </Section>
  );
};

export default Portfolio;