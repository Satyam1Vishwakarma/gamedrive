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
  /*const gamelist = [
    "Ghost Of Tsusima",
    "Hitman 2",
    "Apex Legends",
    "Fortnite",
    "Call Of Duty",
    "Assassins Creed Origins",
    "Last Of Us 2",
    "GTA 5",
    "GTA 6",
    "WWE 2k Series",
  ];*/
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
          if (elementsliced.startsWith(input)) {
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

    for (const index in result) {
      const element = result[index];
      cards.push(
        <Link key={index} href={index.toString()}>
          <MyCard
            gamename={element["name"]}
            inkey={index + element["name"]}
            cover={element["images"][0]}
          ></MyCard>
        </Link>
      );
    }
    console.log("=========", cards);
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
    return cards;*/
  }

  return (
    <div key={11}>
      <div key={11} className="justify-center flex pt-8">
        <Input
          key={111}
          className="max-[640px]:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl"
          variant="underlined"
          type="text"
          label="Games"
          placeholder="Search Here"
          value={input}
          onValueChange={setInput}
        />
      </div>
      <section
        key="section1"
        className="flex flex-col items-start justify-start gap-4 px-5 pt-20"
      >
        <div key="div">
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
        <Tabs
          variant="underlined"
          key="tabs1"
          size="lg"
          selectedKey={category}
          onSelectionChange={setCategory}
        >
          <Tab key="latest" title="Latest">
            <div className="px-7 py-7 flex flex-row flex-wrap justify-center gap-4">
              <div className="px-7 py-7 flex flex-row flex-wrap justify-center gap-4"></div>
            </div>
          </Tab>
          <Tab key="popular" title="Popular">
            {SearchResultDisplay()}
          </Tab>
        </Tabs>
      </section>
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
