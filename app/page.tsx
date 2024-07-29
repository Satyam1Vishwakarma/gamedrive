"use client";
import { Link } from "@nextui-org/link";
import { title } from "@/components/primitives";
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

export default function Home() {
  const gamelist = [
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
  ];
  const PlatformList = ["ALL", "PC", "PS5", "XBOX"];
  const [category, setCategory] = React.useState("latest");
  const [platform, setPlatform] = React.useState("0");
  const [fun, setfun] = React.useState("1");
  const [input, setInput] = React.useState("");

  function Search(input: any) {
    let result: string[] = [];
    if (input != "") {
      gamelist.map((name, value) => {
        for (let index = 0; index < name.length; index++) {
          const element = name.slice(index, name.length);
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

  return (
    <>
      <div key={11} className="justify-center flex pt-8">
        <Input
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
        key="section"
        className="flex flex-col items-start justify-start gap-4 px-5 pt-20"
      >
        <div key="div">
          <Tabs
            variant="underlined"
            key={1}
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
          key="tabs"
          size="lg"
          selectedKey={category}
          onSelectionChange={setCategory}
        >
          <Tab key="latest" title="Latest">
            <div className="px-7 py-7 flex flex-row flex-wrap justify-center gap-4">
              {Search(input).length == 0 ? (
                <h1 className={title({ color: "violet", size: "md" })}>
                  NO RESULT FOUND
                </h1>
              ) : (
                Search(input).map((name, index) => (
                  <Link href={name}>
                    <MyCard
                      gamename={name}
                      inkey={index}
                      onClick={() => {
                        setfun(name);
                      }}
                    ></MyCard>
                  </Link>
                ))
              )}
            </div>
          </Tab>
          <Tab key="popular" title="Popular"></Tab>
        </Tabs>
        Selected key is {category} and platform is {platform} and fun is {fun}
        and result is{}is
      </section>
    </>
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
          src="https://nextui.org/images/hero-card.jpeg"
        />
      </CardBody>
      <CardFooter key={props.inkey + 3} className="text-small justify-between">
        {props.gamename}
      </CardFooter>
    </Card>
  );
}
