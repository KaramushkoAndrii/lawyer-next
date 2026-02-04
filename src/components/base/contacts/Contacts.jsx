"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import SocialList from "@/data/social";

const Contacts = ({ data }) => {
  return (
    <ul className="flex items-center gap-4 flex-col text-white lg:flex-row lg:gap-2">
      <li className="bg-primary p-4 rounded-full">
        <Link href="tel:+380979863778" className="flex gap-2 items-center">
          <i>
            <BsTelephone />
          </i>
          <span className="hidden lg:block">0979863778</span>
        </Link>
      </li>
      <li>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="bg-primary p-4 h-auto min-w-0 text-white"
              radius="full"
            >
              <i>
                <CiMail />
              </i>
              <span className="hidden lg:block">Связаться со мной</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {SocialList.map((item) => (
              <DropdownItem key={item.id}>
                <Link href={item.url} className="flex items-center gap-4">
                  <i>{item.icon}</i>
                  <span>{item.name}</span>
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  );
};

export default Contacts;
