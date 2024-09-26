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
  Spacer,
} from "@nextui-org/react";
import React from "react";
import { fileURLToPath } from "url";
const gamelist = require("@/public/data.json");

export default function Home() {
  const PlatformList = ["ALL", "PC", "PS5", "XBOX"];
  const [category, setCategory] = React.useState("popular");
  const [platform, setPlatform] = React.useState("0");
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

    let result: any = {};
    if (input != "") {
      gamelist.map((name: any, value: any) => {
        for (let index = 0; index < name["name"].length; index++) {
          const element = name.slice(index, name["name"].length);
          if (element.startsWith(input)) {
            result.push(name);
            break;
          }
        }
      });
    } else {
      result = gamelist;
    }
    return result;
  }

  function SearchResultDisplay() {
    const cards = [];
    const result = Search(input);
    const cat_result = [];
    const totalresult = [];

    for (const index in result) {
      const element = result[index];
      if (element["category"] == category) {
        cat_result.push(element);
      }
    }

    for (const index in cat_result) {
      const element = result[index];

      if (platform == "ALL") {
        for (const ind in element["platform"]) {
          totalresult.push(element);
        }
      }

      if (platform == "PC") {
        for (const ind in element["platform"]) {
          if (element["platform"][ind] == platform) {
            totalresult.push(element);
          }
        }
      }
      if (platform == "PS5") {
        for (const ind in element["platform"]) {
          if (element["platform"][ind] == platform) {
            totalresult.push(element);
          }
        }
      }
      if (platform == "XBOX") {
        for (const ind in element["platform"]) {
          if (element["platform"][ind] == platform) {
            totalresult.push(element);
          }
        }
      }
    }

    for (const index in totalresult) {
      const titled = [];
      for (let name of result[index]["name"].split(" ")) {
        titled.push(name[0].toUpperCase() + name.slice(1, name.length));
      }
      cards.push(
        <Link className="px-2 py-2" href={index.toString()}>
          <MyCard
            gamename={titled.join(" ")}
            inkey={index}
            cover={result[index]["images"][0]}
          ></MyCard>
        </Link>
      );
    }
    return cards;

    /*  for (let index = 0; index < MAX_LIST_SIZE; index++) {
        cards.push(
          <Link href={index.toString()}>
            <MyCard
              gamename={result[index]["name"]}
              inkey={index}
              cover={result[index]["images"][0]}
              onClick={() => {
                setfun(result[index]["name"]);
              }}
            ></MyCard>
          </Link>
        );
      }
      return cards;
      
      
      
      
      
      for (const curr_plat in element["platform"]) {
        if (platform == "ALL" && element["category"] == category) {
          finalresult.push(
            <Link href={index.toString()}>
              <MyCard
                gamename={result[index]["name"]}
                inkey={index}
                cover={result[index]["images"][0]}
              ></MyCard>
            </Link>
          );
        } else if (curr_plat == platform && element["category"] == category) {
          finalresult.push(
            <Link href={index.toString()}>
              <MyCard
                gamename={result[index]["name"]}
                inkey={index}
                cover={result[index]["images"][0]}
              ></MyCard>
            </Link>
          );
        }
      }
      
      
      
      
      
      
      */
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
            onSelectionChange={setPlatform}
          >
            {PlatformList.map((value, index) => (
              <Tab key={value} title={value}></Tab>
            ))}
          </Tabs>
        </div>
        <div>
          <Tabs
            variant="underlined"
            key="tabs1"
            size="lg"
            selectedKey={category}
            onSelectionChange={setCategory}
          >
            <Tab key="latest" title="Latest"></Tab>
            <Tab key="popular" title="Popular"></Tab>
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
      shadow="sd"
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
