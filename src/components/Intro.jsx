import Button from './Button/Button';
import styles from './css/Intro.module.css';
import buttonStyles from './Button/Button.module.css';
import Section from './Section'
import selfie from "../assets/selfie2.png";

const resume = "https://docs.google.com/document/d/1uBpM3bm3Dk4MaqCDhA-WG-rCPGFk2dNBnpGOgdqUIAQ/edit?usp=sharing";

function Intro() {
  return (
    <Section className={styles.introContainer} contentClassName={styles.wrapper}>
        {/* <div className={styles.roundedTag}>
          Full Stack Developer
        </div> */}
        <div className={styles.headingContainer}>
          <h1 className={styles.h1Anim}>
              Hello, I'm Byron.
          </h1>
          <h2>
            Full Stack Developer
          </h2>
          {/* <span className={styles.highlight}>Full Stack Developer.</span> */}
          {/* <p>
            I spent the last five years building pipelines for robotics at DeepMind and designed for
            AAA games at PlayStation. Now, I’m bringing that same performance-obsessed mindset to the browser.
          </p>
          <p>
            I write code that creates experiences. Whether it's
            Python automation or a React frontend, I build tools that are as satisfying to use as
            they are to look at.
          </p> */}
          <p>
            A passionate Full Stack and Python Developer with a background in 3d design for games and simulation. 
            I'm versed in React, Flask, Node, Express, Postgres and much more...
          </p>

          <div className={`${buttonStyles.buttonContainer} ${styles.introButtons}`}>
            <Button text="Portfolio" href="#portfolio"/>
            <Button text="Resume" href={resume} className={buttonStyles.buttonBorder}/>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img 
            src={selfie}
            className={styles.image} 
            />
            <div className={styles.circle}>

            </div>
        </div>
    </Section>

  );
}

export default Intro;