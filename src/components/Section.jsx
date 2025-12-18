import Button from './Button/Button';
import styles from './css/Section.module.css';

const Section = ({ title, children, id, className = '', contentClassName }) => {
  return (
    <section id={id} className={`${styles.sectionContainer} ${className}`}>
      <div className={`${styles.contentWrapper} ${contentClassName}`}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default Section;