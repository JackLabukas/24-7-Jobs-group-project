import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import About from "./components/How-It-Works";
import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar/Navbar1";
import { createContext } from "react";
import React, { useState, useEffect } from "react";
import News from "./components/News";
import SearchBar from "./components/SearchBar";

const testArr = JSON.parse(localStorage.getItem("Response"));
const newsArr = JSON.parse(localStorage.getItem("News"));
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "black";
      body.style.color = "#dddddd";
    } else {
      body.style.background = "#778899";
      body.style.color = "#656d72";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="container-flex" id={theme}>
        <div className="row">
          <Navbar1 />
          <SearchBar />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <Salary salaryArr={salaryArr} /> */}

                    <JobList testArr={testArr} />
                    <News newsArr={newsArr} />
                  </>
                }
              />
              {/* <Route path ="/" element = {<Home />}/> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
