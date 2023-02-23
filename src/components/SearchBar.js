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
    API.getJobByTitle(jobTitle);

    setTimeout(reloadPage, 5000);
  };

  return (
    <div className="row">
      <div className="input-group">
        <input
          type="text"
          placeholder="Start by typing...Your Dream Job?"
          onChange={handleChange}
          className="m-2 form-control pt-4 pb-4"
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        type="submit button"
        className="btn btn-warning m-2 w-50"
      >
        Search Jobs
      </button>
    </div>
  );
}

export default SearchBar;
