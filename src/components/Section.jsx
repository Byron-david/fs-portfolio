import Button from './Button/Button';
import styles from './css/Section.module.css';

function Section() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.section}>
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
      </div>
      <Button text="Portfolio"/>
      <Button text="Resume" className={"buttonBorder"}/>
    </section>
  );
}

export default Section;