import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uk", "ru"],
  defaultLocale: "uk",

  pathnames: {
    "/": "/",
    "/build": {
      ru: "/stroitelsvo",
      uk: "/budivnitstvo",
    },
    "/family": {
      ru: "/simeynie-dela",
      uk: "/simeyni-spravy",
    },
    "/military": {
      ru: "/voennoe-pravo",
      uk: "/viyskove-pravo",
    },
    "/lawyer": {
      ru: "/uslygi-advokate",
      uk: "/poslygi-advokata",
    },
    "/duty": {
      ru: "/vozvrat-dolgov",
      uk: "/povernenya-borgiv",
    },
    "/protection": {
      ru: "/yuridicheskaya-zashita-dolzhnikkov",
      uk: "/yiuridicniy-zahist-borzhnikiv",
    },
    "/worker": {
      ru: "/trudovoe-pravo",
      uk: "/trudove-pravo",
    },
    "/law": {
      ru: "/administrativnoe-pravo",
      uk: "/administrativne-pravo",
    },
    "/violation": {
      ru: "/dela-pro-administrativnoe-pravonarushenie",
      uk: "/spravy-pro-administrativne-pravoporushennya",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
