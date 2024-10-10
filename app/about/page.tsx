import { title } from "@/components/primitives";
import { Spacer } from "@nextui-org/spacer";
import React from "react";

const Aboutme = () => {
  return (
    <center className="text-center py-20">
      <div>
        <u>
          <h1 className={title({ color: "blue", size: "lg" })}>About Me</h1>
        </u>
      </div>
      <Spacer y={5}></Spacer>
      <div>
        <h1 className={title({ color: "pink", size: "md" })}>
          Satyam Vishwakarma
        </h1>
      </div>
      <div>
        <h1 className={title({ color: "cyan", size: "sm" })}>
          Computer Science<br></br>Student<br></br>@GPA
        </h1>
      </div>
    </center>
  );
};

export default Aboutme;
