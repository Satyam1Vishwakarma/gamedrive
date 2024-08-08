import { Spinner } from "@nextui-org/react";
import React from "react";

const LoadingPage = () => {
  return (
    <center key={1} className="pt-36">
      <div>
        <Spinner label="Loading......" size="lg" color="warning"></Spinner>
      </div>
    </center>
  );
};

export default LoadingPage;
