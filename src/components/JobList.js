import React from "react";
import { v4 as uuidv4 } from "uuid";

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
      <ul className="list-group">
        {props.testArr.map((job) => (
          <div className="card" key={uuidv4()}>
            <div className="card-body">
              <h5 className="card-title">{job.job_title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {job.job_location}
              </h6>
              <h6 className="card-subtitle mb-2 text-warning">
                {job.company_name}
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href={job.linkedin_job_url_cleaned} className="card-link">
                Take me there!
              </a>
            </div>
          </div>
        ))}
      </ul>
    );
  }
}

export default JobList;
