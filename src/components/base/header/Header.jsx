"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import NavigationList from "@/data/navigationList";
import LangSwitcher from "@/components/base/langSwitcher/LangSwitcher";
import Contacts from "../contacts/Contacts";
import { FaWpforms } from "react-icons/fa";
import ModalButton from "@/components/UI/modalButton/ModalButton";
import SocialList from "@/data/social";

const Header = () => {
  const t = useTranslations("Navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar
        isBordered
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className=" bg-primary text-white"
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden lg:flex">
          {NavigationList.map((item, index) => (
            <NavbarItem key={index}>
              <Link href={item.url}>{t(item.name)}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Contacts />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="grow-0! hidden lg:flex">
          <NavbarItem>
            <LangSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-primary/30 backdrop-blur-md text-white items-center justify-center gap-10">
          {NavigationList.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href={item.url}
                size="lg"
                onClick={closeHandler}
              >
                {t(item.name)}
              </Link>
            </NavbarMenuItem>
          ))}
          <ul className="flex flex-row gap-4">
            {SocialList.map((item) => (
              <li
                key={item.id}
                className={`p-2 rounded-[50%] ${item.iconColor}`}
              >
                <Link href={item.url}>{item.icon}</Link>
              </li>
            ))}
          </ul>
          <NavbarMenuItem className="flex gap-4 items-center">
            <LangSwitcher />
            <ModalButton size="sm" className="p-0 w-fit h-full">
              <FaWpforms />
            </ModalButton>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <div className="fixed left-auto right-3 bottom-40 z-20 lg:hidden">
        <Contacts />
      </div>
    </>
  );
};

export default Header;
