import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Salary from "./components/Salary";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { createContext } from "react";
import React, { useState, useEffect } from "react";

const testArr = JSON.parse(localStorage.getItem("Response"));
const salaryArr = JSON.parse(localStorage.getItem("Salary"));

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "#2e363d";
      body.style.color = "#dddddd";
    } else {
      body.style.background = "#778899";
      body.style.color = "#656d72";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
    <div className="App" id={theme}>
    <Router>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Salary salaryArr={salaryArr} />
                <JobList testArr={testArr} />
              </>
            }
          />
          <Route path ="/" element = {<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />            
        </Routes>
      <Footer />
    </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
