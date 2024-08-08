"use client";

import { title } from "@/components/primitives";
import { useEffect } from "react";
import { Button } from "@nextui-org/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div key={1} className="gap-8 px-5 py-5">
      <div className="justify-center items-center flex flex-col max-h-full">
        <h2 className={title({ color: "yellow", size: "md" })}>
          Something went wrong!
        </h2>
      </div>
      <div className="justify-center items-center flex flex-col gap-8 px-5 py-10">
        <Button
          color="danger"
          onClick={
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
