import { Link } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { GetLocalizedSlug } from "@/lib/getLocalizedSlug";

export default async function ServicesListItem({
  slugData,
  text,
  keyGroup,
  routePath,
}) {
  const t = await getTranslations(keyGroup);
  const locale = await getLocale();
  const localizedSlug = GetLocalizedSlug(slugData, locale);
  // const finalHref = `/build/${localizedSlug}`;
  return (
    <li className="border border-solid border-transparent rounded-main shadow-main transition-all duration-500 ease-in-out hover:scale-list-item hover:shadow-main-large hover:border-primary">
      <Link
        href={{
          pathname: `${routePath}/[slug]`,
          params: { slug: localizedSlug },
        }}
        className="flex p-4 w-full h-full items-center justify-center text-primary text-center"
      >
        {t(text)}
      </Link>
    </li>
  );
}
