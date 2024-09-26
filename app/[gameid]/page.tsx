"use client";
import {
  Image,
  Accordion,
  AccordionItem,
  Card,
  Spacer,
} from "@nextui-org/react";
import React from "react";
import { title } from "@/components/primitives";
import { Progress } from "@nextui-org/react";

const systemreq = ["System Requirements"];

/*
export async function generateStaticParams() {
  const re = [];
  const posts = require("@/public/data.json");

  for (const index in posts) {
    re.push(index);
  }

  return re.map((post)=>({gameid:post}))
}
*/
export default function GameReview({ params }: any) {
  const reviewlog = require("@/public/data.json");

  function Review(reviewlog: any) {
    const temp = [];
    const posts = reviewlog;
    const element = posts[params.gameid];
    const review = element["review"];

    for (const index in review) {
      temp.push(<div>{review[index]}</div>);
    }
    return temp;
  }

  function Requirement(reviewlog: any) {
    const temp = [];
    const posts = reviewlog;
    const element = posts[params.gameid];
    const review = element["systemrequirements"];

    for (const index in review) {
      temp.push(
        <div>
          {index}:{review[index]}
        </div>
      );
    }
    return temp;
  }

  function Genres(reviewlog: any) {
    const temp = [];
    const posts = reviewlog;
    const element = posts[params.gameid];
    const review = element["genres"];
    temp.push(<div>{review}</div>);
    return temp;
  }

  function Company(reviewlog: any) {
    const temp = [];
    const posts = reviewlog;
    const element = posts[params.gameid];
    const review = element["company"];
    temp.push(<div>{review}</div>);
    return temp;
  }

  function RImages(reviewlog: any) {
    const images = [];
    for (let index = 1; index < 5; index++) {
      const img = reviewlog[params.gameid]["images"][index];
      images.push(<Image sizes={"20"} key={index} src={img} />);
    }
    return images;
  }

  return (
    <div
      key="1"
      className=" grid grid-cols-2  grid-rows-1 row-span-2 gap-1 pt-7 px-5"
    >
      <div className="justify-around items-stretch">
        <center>
          <Image
            isBlurred
            key={1}
            sizes="1"
            src={reviewlog[params.gameid]["images"][0]}
          />
        </center>
      </div>

      <div key="1">
        <center>
          <div>
            <div className={title({ size: "gamereq" })}>Genres</div>
            <div>{Genres(reviewlog)}</div>
          </div>
          <div className="pt-8">
            <div className={title({ size: "gamereq" })}>Company</div>
            <div>{Company(reviewlog)}</div>
          </div>
        </center>
      </div>
      <div key="1" className="col-span-2 row-span-2 pt-12 gap-2">
        <div className={title({ size: "gamereq" })}>Game Description</div>
        <Spacer y={1.5}></Spacer>
        <Card className="bg-transparent border-1 px-4 py-10">
          {Review(reviewlog)}
        </Card>
        <div className="pt-5">
          <div className={title({ size: "gamereq" })}>Rating</div>
        </div>
        <Spacer y={1.5}></Spacer>
        <Card className="bg-transparent border-1 px-4 py-10">
          <Progress
            aria-label="Downloading..."
            size="md"
            value={reviewlog[params.gameid]["rating"] * 10}
            color="success"
            showValueLabel={true}
            className="max-w-md "
          />
        </Card>
        <div className="pt-5">
          <div className={title({ size: "gamereq" })}>Images</div>
        </div>
        <Spacer y={1.5}></Spacer>
        <Card className="bg-transparent border-1 px-7 py-7 flex flex-row flex-wrap justify-center gap-4">
          {RImages(reviewlog)}
        </Card>
      </div>
    </div>
  );
}

/*<Accordion variant="bordered">
          <AccordionItem
            key={1}
            aria-label="Game Description"
            title="Game Description"
          >
            {Review(reviewlog)}
          </AccordionItem>
        </Accordion>
        <Accordion variant="bordered">
          <AccordionItem key={2} aria-label="Rating" title="Rating">
            <Progress
              aria-label="Downloading..."
              size="md"
              value={reviewlog[params.gameid]["rating"] * 10}
              color="success"
              showValueLabel={true}
              className="max-w-md"
            />
          </AccordionItem>
        </Accordion>
        <Accordion variant="bordered">
          <AccordionItem key={1} aria-label="Images" title="Images">
            <div className="px-7 py-7 flex flex-row flex-wrap justify-center gap-4">
              {RImages(reviewlog)}
            </div>
          </AccordionItem>
        </Accordion>
        */
