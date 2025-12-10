import Button from './Button/Button';
import styles from './css/Intro.module.css';
import buttonStyles from './Button/Button.module.css';
import Section from './Section'

function Intro() {
  return (
    <Section className={styles.introContainer}>
        {/* <div className={styles.roundedTag}>
          Full Stack Developer
        </div> */}

        <h1>
            Hello, I'm Byron David.
        </h1>
        <h2>
          Full Stack Developer
        </h2>
        {/* <span className={styles.highlight}>Full Stack Developer.</span> */}
        <p>
          I spent the last five years building pipelines for robotics at DeepMind and designed for
          AAA games at PlayStation. Now, I’m bringing that same performance-obsessed mindset to the browser.
        </p>
        <p>
          I write code that creates experiences. Whether it's
          Python automation or a React frontend, I build tools that are as satisfying to use as
          they are to look at.
        </p>

      <div className={buttonStyles.buttonContainer}>
        <Button text="Portfolio" href="#portfolio"/>
        <Button text="Resume" className={buttonStyles.buttonBorder}/>
      </div>

    </Section>

  );
}

export default Intro;