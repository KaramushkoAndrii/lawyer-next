import Link from "next/link";
import { useTranslations } from "next-intl";
import NavigationList from "@/data/navigationList";

const Footer = () => {
  const t = useTranslations("Navigation");
  return (
    <footer>
      <nav>
        <ul className="p-4 grid grid-cols-3">
          {NavigationList.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{t(`${item.name}`)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
