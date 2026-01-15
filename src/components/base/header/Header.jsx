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

const Header = () => {
  const t = useTranslations("Navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-screen bg-primary">
      <Navbar
        shouldHideOnScroll
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="hidden sm:flex">
          {NavigationList.map((item, index) => (
            <NavbarItem key={index}>
              <Link href={item.url}>{t(item.name)}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Contacts />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="grow-0! hidden sm:flex ">
          <NavbarItem>
            <LangSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-primary/30 backdrop-blur-md">
          {NavigationList.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.url} size="lg">
                {t(item.name)}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="sm:hidden">
            <LangSwitcher />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Contacts />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
