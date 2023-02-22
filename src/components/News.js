import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
function News(props) {
  if (props.newsArr) {
    return (
      <div className="col">
        <motion.div
          animate={{ x: 170, y: -43 }}
          transition={{ delay: 1 }}
          className="btn btn-danger mt-0 w-50 d-flex justify-content-center"
        >
          INDUSTRY NEWS
        </motion.div>
        {props.newsArr.articles.map((job) => (
          <motion.div
            animate={{ x: 20, y: -35 }}
            transition={{ delay: 1 }}
            className="card m-4 border border-danger"
            style={{ width: "90%" }}
            key={uuidv4()}
          >
            <a href={job.url} className="card-header ">
              <img
                className="justify-content-right"
                style={{ width: "30px", height: "30px" }}
                src={`https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/News-And-Weather-icon.png`}
              ></img>
              {job.title}
            </a>

            <div className="card-body">
              <h5 className="card-title text">Written by - {job.author}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href={"https://daily.dev/"}
                className="btn btn-info"
                target="_blank"
              >
                More industry news...
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }
}

export default News;
