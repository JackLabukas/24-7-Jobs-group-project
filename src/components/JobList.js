import React from "react";
import { v4 as uuidv4 } from "uuid";

function JobList(props) {
  if (props.testArr) {
    return (
      <ul className="list-group">
        {props.testArr.map((job) => (
          <li className="list-group-item" key={uuidv4()}>
            {job.company_name}
          </li>
        ))}
      </ul>
    );
  }
}

export default JobList;
