"use client";
import { Image, Accordion, AccordionItem, Card } from "@nextui-org/react";
import React from "react";
import { title } from "@/components/primitives";
import { Progress } from "@nextui-org/react";

const systemreq = ["System Requirements"];

function generateStaticParams() {
  const pages = ["draft", "quill", "slate-react", "result"];
  return pages.map((page) => ({ name: page }));
}

export default function GameReview({ params }: { params: { gameid: string } }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key="1"
      className=" grid grid-cols-2  grid-rows-3 row-span-2 gap-1 pt-12 px-5"
    >
      <div className="justify-around items-stretch">
        <center>
          <Image
            key={1}
            height={200}
            width={200}
            src="https://nextui.org/images/hero-card.jpeg"
          />
        </center>
      </div>

      <div key="1">
        <center>
          <div className={title({ size: "gamereq" })}>System Requirements</div>

          <div>
            {systemreq.map((value, index) => (
              <div className={title({ size: "gamereqsub" })}>
                <li>{value}</li>
              </div>
            ))}
          </div>
        </center>
      </div>
      <div key="1" className="col-span-2 row-span-3 pt-8">
        <Accordion variant="bordered">
          <AccordionItem key={1} aria-label="Accordion 1" title="Accordion 1">
            wqewqeq
          </AccordionItem>
        </Accordion>
        <Accordion variant="bordered">
          <AccordionItem key={2} aria-label="Accordion 2" title="Accordion 2">
            <Progress
              aria-label="Downloading..."
              size="md"
              value={value}
              color="success"
              showValueLabel={true}
              className="max-w-md"
            />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
