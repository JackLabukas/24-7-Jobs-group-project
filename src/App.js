import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const testArr = JSON.parse(localStorage.getItem("Response"));
const salaryArr = JSON.parse(localStorage.getItem("Salary"));
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <JobList testArr={testArr} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
