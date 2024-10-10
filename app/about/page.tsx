import { GithubIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";
import React from "react";

const Aboutme = () => {
  return (
    <center className="text-center py-20">
      <u>
        <h1 className={title({ color: "blue", size: "lg" })}>About Me</h1>
      </u>
      <Spacer y={5}></Spacer>
      <h1 className={title({ color: "pink", size: "md" })}>
        Satyam Vishwakarma
        <br />
      </h1>
      <h1 className={title({ color: "cyan", size: "sm" })}>
        Computer Science<br />Student<br />@GPA
      </h1>
      <center>
        <Link href="https://github.com/Satyam1Vishwakarma">
          <GithubIcon height={60} width={80} size={35} />
        </Link>
      </center>
    </center>
  );
};

export default Aboutme;
