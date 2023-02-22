import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    changeTheme();
  };

  const toggleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.desktopMenu}>
        <div className={styles.nav_left}>
          <a href="/">JobSite</a>
        </div>
        <div className={styles.nav}>
          <a href="/about" className={styles.nav_link}>
            About
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <BsSun /> : <BsMoonStars />}
          </div>
        </div>
      </div>
      <div className={styles.mobileMenu}>
        {/* Hamburger menu */}
        <div className={styles.nav_left}>
          <a href="#home">JobSite</a>
        </div>
        <div
          className={`${styles.navMobile} ${
            isMenuClicked ? styles.active : ""
          }`}
        >
          <button id="btn" href="#about" className={styles.nav_link}>
            About
          </button>

          <button id="btn" href="#contact" className={styles.nav_link}>
            Contact
          </button>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <BsSun /> : <BsMoonStars />}
          </div>
          <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
            {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
