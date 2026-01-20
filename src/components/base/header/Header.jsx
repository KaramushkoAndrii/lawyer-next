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
    <>
      <header className="w-screen bg-primary">
        <Navbar
          shouldHideOnScroll
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
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

          <NavbarContent className="grow-0! ">
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
          </NavbarMenu>
        </Navbar>
      </header>

      <div className="fixed bottom-0 left-0 w-full bg-primary z-50 lg:hidden border-t border-white/10">
        <div className="flex items-center justify-around py-4 px-6 gap-6 safe-area-pb">
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Header;
