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
      // body.style.background = "black";
      body.style.backgroundImage = `url('https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?w=1800&t=st=1677092209~exp=1677092809~hmac=ad656fec6a0a744e4d4cae7e667f36b788e2e368badbcfe334c1ad3f125755ad')`;
      // body.style.color = "#dddddd"`;
    } else {
      body.style.background = "#778899";
      body.style.backgroundImage = `url('https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=1380&t=st=1677092273~exp=1677092873~hmac=c15dfd8a8e5f9885d60d1bb4eae264837f850d600ecb8aaeb631bdbe90092882')`;
      // body.style.color = "#656d72";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Navbar1 />
      <div className="container" id={theme}>
        <div className="row">
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
