import { Link } from "react-router-dom";
import styles from './css/Navbar.module.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link 
        to="/" 
        className={styles.name} 
        onClick={scrollToTop} 
      >
        Byron David
      </Link>


      {/* RIGHT SIDE: Links */}
      <div className={styles.navLinks}>
        
        <a 
          href="#portfolio" 
          className={styles.link}
        >
          Portfolio
        </a>

        {/* External/Static Link to Resume PDF */}
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