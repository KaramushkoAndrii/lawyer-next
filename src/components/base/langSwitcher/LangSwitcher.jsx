"use client";

import { useParams } from "next/navigation";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/routing";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from "@heroui/react";
// import { Select, SelectItem } from "@heroui/react";

// import "./changeLng.scss";

const LangSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // Toggle the locale
  const handleLanguageChange = (keys) => {
    const newLocale = Array.from(keys)[0];

    if (!newLocale) return;

    router.push(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          size="sm"
          className="min-w-fit px-2 h-8 text-small font-medium"
        >
          {locale == "uk" ? "UA" : locale.toUpperCase()}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        //can`t be empty
        disallowEmptySelection
        selectionMode="single"
        //current language
        selectedKeys={new Set([locale])}
        // language changer
        onSelectionChange={handleLanguageChange}
      >
        {routing.locales.map((l) => (
          <DropdownItem key={l}>
            {l == "uk" ? "UA" : locale.toUpperCase()}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LangSwitcher;
