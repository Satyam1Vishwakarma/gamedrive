"use client";
import { Link } from "@nextui-org/link";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
  Input,
} from "@nextui-org/react";
import React from "react";
const gamelist = require("@/public/data.json");

export default function Home() {
  const PlatformList = ["ALL", "PC", "PS", "XBOX"];
  const [category, setCategory] = React.useState("latest");
  const [platform, setPlatform] = React.useState("ALL");
  const [input, setInput] = React.useState("");

  function Search(input: any) {
    interface IHash {
      [key: string]: string;
    }
    const resultmap: IHash = {};
    if (input != "") {
      for (const index in gamelist) {
        const element = gamelist[index];
        for (let i = 0; i < element["name"].length; i++) {
          const elementsliced = element["name"].slice(
            i,
            element["name"].length
          );
          if (elementsliced.toUpperCase().startsWith(input.toUpperCase())) {
            resultmap[index] = element;
            break;
          }
        }
      }
    } else {
      for (const index in gamelist) {
        const element = gamelist[index];
        resultmap[index] = element;
      }
    }
    return resultmap;
  }

  function SearchResultDisplay() {
    let cards = [];
    const result = Search(input);
    let cat_result = [];
    let totalresult = [];

    interface IHash {
      [key: string]: string;
    }

    for (const index in result) {
      const element = result[index];
      cat_result.push(element);
    }

    for (const index in cat_result) {
      const element = cat_result[index];

      if (platform == "ALL") {
        totalresult.push(element);
      } else if (platform == "PC") {
        for (const ind in element["platform"]) {
          if (element["platform"][ind] == platform) {
            totalresult.push(element);
          }
        }
      } else if (platform == "PS") {
        for (const ind in element["platform"]) {
          if (element["platform"][ind] == platform) {
            totalresult.push(element);
          }
        }
      } else if (platform == "XBOX") {
        for (const ind in element["platform"]) {
          if (element["platform"][ind] == platform) {
            totalresult.push(element);
          }
        }
      }
    }

    for (const index in totalresult) {
      const titled = [];
      for (let name of totalresult[index]["name"].split(" ")) {
        titled.push(name[0].toUpperCase() + name.slice(1, name.length));
      }
      cards.push(
        <Link className="px-2 py-2" href={index.toString()}>
          <MyCard
            gamename={titled.join(" ")}
            inkey={index}
            cover={totalresult[index]["images"][0]}
          ></MyCard>
        </Link>
      );
    }
    if (totalresult.length > 0) {
      return cards;
    } else {
      return null;
    }
  }

  return (
    <div className="grid grid-cols-3  grid-rows-1 gap-2">
      <div className="grid-rows-0 col-start-2 pt-14">
        <Input
          className="grow"
          key={111}
          variant="underlined"
          type="text"
          label="Games"
          placeholder="Search Here"
          value={input}
          onValueChange={setInput}
        />
      </div>
      <div className="col-span-3 pt-10 px-14">
        <div>
          <Tabs
            variant="underlined"
            key={10}
            selectedKey={platform}
            // @ts-ignore
            onSelectionChange={setPlatform}
          >
            {PlatformList.map((value, index) => (
              <Tab key={value} title={value}></Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <center
        key={123}
        className="col-span-3 row-span-1 flex flex-row flex-wrap justify-center"
      >
        {SearchResultDisplay()}
      </center>
    </div>
  );
}
function MyCard(props: any) {
  return (
    <Card
      key={props.inkey}
      isFooterBlurred
      radius="lg"
      shadow="sm"
      className="border-none"
      {...props}
    >
      <CardBody keys={props.inkey + 1} className="px-2 py-2" {...props}>
        <Image
          isZoomed
          key={props.inkey + 2}
          height={200}
          width={200}
          src={props.cover}
        />
      </CardBody>
      <CardFooter key={props.inkey + 3} className="text-small justify-between">
        {props.gamename}
      </CardFooter>
    </Card>
  );
}
