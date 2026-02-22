import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function ServicesListItem({ src, text, keyGroup }) {
  const t = await getTranslations(keyGroup);
  return (
    <li className="border border-solid border-transparent rounded-main shadow-main transition-all duration-500 ease-in-out hover:scale-list-item hover:shadow-main-large hover:border-primary">
      <Link
        href={src}
        className="flex p-4 w-full h-full items-center justify-center text-primary text-center"
      >
        {t(text)}
      </Link>
    </li>
  );
}
