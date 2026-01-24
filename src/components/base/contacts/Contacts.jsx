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
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
            <DropdownItem>
              <Link href="/" className="flex items-center gap-4">
                <i>
                  <PiTelegramLogoLight size={22} />
                </i>
                <span>telegram</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/" className="flex items-center gap-4">
                <i>
                  <FaViber size={22} />
                </i>
                <span>viber</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/" className="flex items-center gap-4">
                <i>
                  <FaWhatsapp size={22} />
                </i>
                <span>whatsap</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  );
};

export default Contacts;
