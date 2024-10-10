"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import { Link } from "@nextui-org/link";
import { ThemeSwitcher } from "./theme-switch";
import { title } from "@/components/primitives";
import ExportedImage from "next-image-export-optimizer";
import MainLogo from "@/public/logo.png";
import { Aboutme} from "./icons";

export const Navbar = () => {
  return (
    <NextUINavbar isBordered key={1}>
      <NavbarContent key={2}>
        <NavbarBrand key={3}>
          <Link href="/">
            <ExportedImage
              src={MainLogo}
              alt="Static Image"
              height={50}
              width={50}
            />
          </Link>

          <Spacer x={1.5} />
          <Link href="/">
            <p className={title({ color: "violet", size: "md" })}>GameDrive</p>
          </Link>
        </NavbarBrand>

        <NavbarItem key={56}>
          <Link href="/about">
            <Spacer y={2}></Spacer>
            <Aboutme height={60} width={80} size={21} />
          </Link>
        </NavbarItem>

        <NavbarItem key={5}>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
