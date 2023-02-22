import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import LikeButton from "./LikeButton";

// function JobList(props) {
//   if (props.testArr) {
//     return (
//       <ul className="list-group">
//         {props.testArr.map((job) => (
//           <li className="list-group-item" key={uuidv4()}>
//             {job.company_name}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

function JobList(props) {
  if (props.testArr) {
    return (
      // <div className="row d-flex justify-content-center">
      // <SearchBar />
      <div className="col">
        {/* <SearchBar /> */}
        <div className="row d-flex justify-content-left">
          {props.testArr.map((job) => (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="card m-4"
              style={{ width: "90%" }}
              key={uuidv4()}
            >
              <div className="card-body">
                <h5 className="card-title text-uppercase">{job.job_title}</h5>

                <h6 className="card-subtitle mb-2 text-info">
                  {job.job_location}
                </h6>
                <h6 className="card-subtitle mb-2 text-warning">
                  {job.company_name}
                </h6>
                <p className="card-text">
                  Date this job was posted - {job.posted_date}
                </p>
                <a href={job.linkedin_job_url_cleaned} className="card-link">
                  Take me there!
                </a>
                <LikeButton />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  } else {
    return <SearchBar />;
  }
}

export default JobList;
