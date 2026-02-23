"use client";

import { useParams } from "next/navigation";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/routing";
// import { BuildServicesData } from "@/data/servicesData";
import { AllServicesData } from "@/data/servicesData";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from "@heroui/react";

const LangSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // Toggle the locale
  const handleLanguageChange = (keys) => {
    const newLocale = Array.from(keys)[0];

    if (!newLocale) return;

    let newParams = { ...params };

    if (params.slug) {
      const categoryKey = pathname.split("/")[1];

      const categoryData = AllServicesData[categoryKey];

      // if (currentService) {
      //   // Подменяем слаг на версию для нового языка
      //   newParams.slug = currentService.slug[newLocale];
      // }

      if (categoryData) {
        const currentService = categoryData.find(
          (item) => item.slug[locale] === params.slug,
        );

        if (currentService) {
          newParams.slug = currentService.slug[newLocale];
        }
      }
    }

    router.push(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params: newParams },
      { locale: newLocale },
    );
  };

  return (
    <Dropdown className="w-20 min-w-12.5" shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button
          variant="solid"
          size="sm"
          className="min-w-fit h-8 text-small font-medium text-white bg-primary"
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
          <DropdownItem key={l}>{l == "uk" ? "UA" : "RU"}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LangSwitcher;
