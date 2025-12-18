import React from 'react';
import styles from './css/Portfolio.module.css';
import Section from './Section';
import TechArtPortfolio from "../assets/technicalArtWebsite.png";
import optionWebsite from "../assets/OptionTracker.png";
import pythonTools from "../assets/PythonTools.png";

const projects = [
  {
    id: 1,
    title: "Stock Option Tracker",
    description: "A Full Stack application with authentication to track stocks and options.",
    image: optionWebsite,
    tech: ["React", "Node", "Express", "Postgres"],
    link: "https://option-website-one.vercel.app/",
    gitLink: "https://github.com/Byron-david/Option-Website"
  },
  {
    id: 2,
    title: "Python Tools for Blender",
    description: "Plugins for Blender made in python to import/export with simulation software",
    image: pythonTools,
    tech: ["Python", "Blender", "Mujoco"],
    // link: "https://github.com/Byron-david/Option-Website/",
    gitLink: "https://github.com/Byron-david/Python-Tools"
  },
  {
    id: 3,
    title: "Technical Artist Portfolio",
    description: "A portfolio website for displaying artistic works.",
    image: TechArtPortfolio,
    tech: ["Flask", "Python", "JS"],
    link: "https://www.artofbyron.com",
    gitLink: "https://github.com/Byron-david/Option-Website/"
  },

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
                          {project.link ?
                            <a href={project.link} className={styles.link}>Live Demo</a> 
                            : ""}
                            <a href={project.gitLink} className={styles.link}>GitHub</a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </Section>
  );
};

export default Portfolio;