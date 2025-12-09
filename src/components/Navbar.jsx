import { Link } from "react-router-dom";
import styles from './css/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.name}>
        Byron David
      </Link>


      {/* RIGHT SIDE: Links */}
      <div className={styles.navLinks}>
        
        {/* Internal Link to Portfolio Page */}
        <Link to="/portfolio" className={styles.link}>
          Portfolio
        </Link>

        {/* External/Static Link to Resume PDF */}
        {/* Assumes you put 'resume.pdf' in your project's 'public' folder */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;