import React, { useState } from "react";
// import API from "../App";
import API from "../api";

function SearchBar() {
  const [jobTitle, setJobTitle] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setJobTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click");
    API.getJobByTitle(jobTitle);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} className=""></input>
      <button onClick={handleSubmit} type="submit">
        CLICK ME
      </button>
    </div>
  );
}

export default SearchBar;
