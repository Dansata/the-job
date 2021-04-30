/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import jobs from "./../../assets/data/jobs.json";

const RecentJobs = () => (
  <section>
    <div className="container">
      <header className="section-header">
        <span>Latest</span>
        <h2>Recent jobs</h2>
      </header>

      <div className="row item-blocks-connected">
        {jobs.map((job, idx) => (
          <div key={idx} className="col-xs-12">
            <a className="item-block" href="/">
              <header>
                <img src={job.image} alt="" />
                <div className="hgroup">
                  <h4>{job.title}</h4>
                  <h5>{job.company}</h5>
                </div>
                <div className="header-meta">
                  <span className="location">{job.location}</span>
                  <span className={job.className + ` label`}>{job.type}</span>
                </div>
              </header>
            </a>
          </div>
        ))}
      </div>

      <p className="text-center">
        <Link className="btn btn-info" to="/jobs">
          Browse all jobs
        </Link>
      </p>
    </div>
  </section>
);

export default RecentJobs;
