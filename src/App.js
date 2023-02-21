import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./components/How-It-Works.js"; // Izzy's component - I placed it under JobList in the function but we can move it!

const testArr = JSON.parse(localStorage.getItem("Response"));

function App() {
	return (
		<Router>
			<div className="container-flex">
				<SearchBar />
				<JobList testArr={testArr} />
				<HowItWorks />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
