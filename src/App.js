import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import jobArr from "./api";

function App() {
  return (
    <div className="container-flex">
      <SearchBar />
      {/* <JobList jobArrCopy={jobArrCopy} /> */}
    </div>
  );
}

export default App;
