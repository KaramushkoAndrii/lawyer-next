import Link from "next/link";
import { useTranslations } from "next-intl";
import NavigationList from "@/data/navigationList";

const Footer = () => {
  const t = useTranslations("Navigation");
  return (
    <footer>
      <nav>
        <ul>
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
