import styles from './css/Section.module.css';

function Section() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.section}>
        <div className={styles.roundedTag}>
          Full Stack Developer
        </div>
        <h1>
            Hi, I'm Byron David.
        </h1>
        <h2>
          Full Stack Developer
        </h2>
        <p>
          blah blah blah.
        </p>
      </div>
    </section>
  );
}

export default Section;