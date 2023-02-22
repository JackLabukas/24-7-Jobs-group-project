import React, { useState } from "react";
// import API from "../App";
import API from "../api";
import News from "../apiSalary";

function SearchBar() {
  const [jobTitle, setJobTitle] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setJobTitle(event.target.value);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("fetching...response");
    News.getNews(jobTitle);
    // API.getJobByTitle(jobTitle);
    // Salary.getSalary(jobTitle);
    // setTimeout(reloadPage, 3000);
  };

  // const showLatest = (event) => {
  //   event.preventDefault();
  //   // window.location.reload();
  // };

  return (
    <div className="row">
      <div className="input-group">
        <input
          type="text"
          placeholder="Your Dream Job?"
          onChange={handleChange}
          className="m-2 form-control"
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        type="submit button"
        className="btn btn-warning m-2 w-50"
      >
        Search Jobs
      </button>
      {/* <button
        onClick={showLatest}
        type="submit button "
        className="btn btn-info  m-2"
      >
        Show Latest Results
      </button> */}
    </div>
  );
}

export default SearchBar;
