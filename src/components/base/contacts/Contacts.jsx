"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@heroui/react";
import Link from "next/link";

const Contacts = ({ data }) => {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <Link href="tel:+380979863778">0979863778</Link>
      </li>
      <li>
        <Dropdown>
          <DropdownTrigger>
            <Button>Связаться со мной</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>
              <Link href="/">telegram</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/">viber</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/">whatsap</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  );
};

export default Contacts;
