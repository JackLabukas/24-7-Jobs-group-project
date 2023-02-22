import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";

function NavBar1() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    changeTheme();
  };
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light ">
      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="navbar-brand p-4 text-info"
        href="/"
      >
        JobSite
      </motion.a>

      <div
        className="collapse d-flex justify-content-end navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav pe-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="nav-item nav-link active text-light"
            href="/"
          >
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="nav-item nav-link text-light"
            href="/about"
          >
            About
          </motion.a>

          <div className="nav-item nav-link text-light" onClick={toggleTheme}>
            {darkTheme ? <BsSun /> : <BsMoonStars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar1;
