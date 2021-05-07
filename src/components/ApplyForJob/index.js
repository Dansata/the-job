import React from "react";
import { useEffect, useState } from "react";
import { getJob } from "../../services/jobs";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Main from "./Form";

const ApplyJob = () => {
  const [jobDetail, setJobDetail] = useState([]);
  const { id } = useParams();
  const getJobDetail = async () => {
    const job = await getJob(id);
    setJobDetail(job);
  };
  useEffect(() => {
    getJobDetail();
  }, [id]);

  return (
    <>
      <Header job={jobDetail} />
      <Main />
    </>
  );
};

export default ApplyJob;
