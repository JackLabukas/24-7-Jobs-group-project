import React from "react";
import { v4 as uuidv4 } from "uuid";
function News(props) {
  if (props.newsArr) {
    return (
      <div className="col">
        {props.newsArr.articles.map((job) => (
          <div className="card m-2" key={uuidv4()}>
            <h5 className="card-header">{job.title}</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
