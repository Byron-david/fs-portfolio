import { Link } from "react-router-dom";
import styles from './css/Portfolio.module.css';
import Section from "./Section";
import website1 from "../assets/website1_cropped.png";

function Portfolio() {
  return (
    <Section title="Portfolio">
        <div className={styles.gridContainer}>
          <img src={website1}/>
        </div>
    </Section>
  );
}

export default Portfolio;