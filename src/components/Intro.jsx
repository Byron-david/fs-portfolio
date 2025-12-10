import Button from './Button/Button';
import styles from './css/Intro.module.css';
import buttonStyles from './Button/Button.module.css';
import Section from './Section'

function Intro() {
  return (
    <Section >
        {/* <div className={styles.roundedTag}>
          Full Stack Developer
        </div> */}
        {/* <h2>
          Full Stack Developer
        </h2> */}
        <h1>
            Hello, I'm Byron David.
        </h1>

        <p>
          Technical Artist turned <span className={styles.highlight}>Full Stack Developer.</span> I build robust
          web tools with the eye of a designer and the logic of a computer scientist.
        </p>
      <Button text="Portfolio" href="#portfolio"/>
      <Button text="Resume" className={buttonStyles.buttonBorder}/>
    </Section>

  );
}

export default Intro;