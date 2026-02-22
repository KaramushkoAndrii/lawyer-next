import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uk", "ru"],
  defaultLocale: "uk",

  pathnames: {
    "/": "/",

    "/build": {
      ru: "/stroitelstvo",
      uk: "/budivnitstvo",
    },
    "/build/[slug]": {
      ru: "/stroitelstvo/[slug]",
      uk: "/budivnitstvo/[slug]",
    },

    "/family": {
      ru: "/simeynie-dela",
      uk: "/simeyni-spravy",
    },
    "/family/[slug]": {
      ru: "/simeynie-dela/[slug]",
      uk: "/simeyni-spravy/[slug]",
    },

    "/military": {
      ru: "/voennoe-pravo",
      uk: "/viyskove-pravo",
    },
    "/military/[slug]": {
      ru: "/voennoe-pravo/[slug]",
      uk: "/viyskove-pravo/[slug]",
    },

    "/lawyer": {
      ru: "/uslygi-advokata",
      uk: "/poslygi-advokata",
    },
    "/lawyer/[slug]": {
      ru: "/uslygi-advokata/[slug]",
      uk: "/poslygi-advokata/[slug]",
    },

    "/duty": {
      ru: "/vozvrat-dolgov",
      uk: "/povernenya-borgiv",
    },

    "/protection": {
      ru: "/yuridicheskaya-zashita-dolzhnikkov",
      uk: "/yiuridicniy-zahist-borzhnikiv",
    },
    "/protection/[slug]": {
      ru: "/yuridicheskaya-zashita-dolzhnikkov/[slug]",
      uk: "/yiuridicniy-zahist-borzhnikiv/[slug]",
    },

    "/worker": {
      ru: "/trudovoe-pravo",
      uk: "/trudove-pravo",
    },
    "/worker/[slug]": {
      ru: "/trudovoe-pravo/[slug]",
      uk: "/trudove-pravo/[slug]",
    },

    "/law": {
      ru: "/administrativnoe-pravo",
      uk: "/administrativne-pravo",
    },
    "/law/[slug]": {
      ru: "/administrativnoe-pravo/[slug]",
      uk: "/administrativne-pravo/[slug]",
    },

    "/violation": {
      ru: "/dela-pro-administrativnoe-pravonarushenie",
      uk: "/spravy-pro-administrativne-pravoporushennya",
    },
    "/violation/[slug]": {
      ru: "/dela-pro-administrativnoe-pravonarushenie/[slug]",
      uk: "/spravy-pro-administrativne-pravoporushennya/[slug]",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
