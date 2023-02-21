import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./components/How-It-Works";

const testArr = JSON.parse(localStorage.getItem("Response"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Salary salaryArr={salaryArr} /> */}
              <JobList testArr={testArr} />
              {/* <Home testArr={testArr} /> */}
            </>
          }
        />
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
