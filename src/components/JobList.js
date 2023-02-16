import React from "react";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../components/SearchBar";

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
      <div className="row d-flex justify-content-center">
        <SearchBar />
        <div className="col-sm-6">
          {props.testArr.map((job) => (
            <div className="card m-2" key={uuidv4()}>
              <div className="card-body">
                <h5 className="card-title">{job.job_title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JobList;
