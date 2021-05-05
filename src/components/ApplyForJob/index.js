import React from "react";
import { useEffect, useState } from "react";
import { getJob } from "../../services/jobs";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Main from "./Form";

const ApplyJob = () => {
  const { id } = useParams();
  useEffect(() => {
    const theJob = getJob(id);
  }, []);
  const [theJob, setJob] = useState(null);
  setJob(id);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default ApplyJob;
