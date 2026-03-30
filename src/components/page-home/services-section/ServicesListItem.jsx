import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FaRegBuilding } from "react-icons/fa";
import Heading from "@/components/UI/heading/Heading";

const ServicesListItem = ({ data }) => {
  const { url, pageTitle } = data;
  const t = useTranslations("ServicesList");
  return (
    <li className="p-4 border border-solid border-primary rounded-main shadow-main w-full max-w-70 transition-all duration-300 ease-in-out hover:scale-list-item hover:shadow-main-large">
      <Link
        href={url}
        className="flex items-center gap-8 h-full lg:flex-col lg:items-start lg:justify-between"
      >
        <i>
          <FaRegBuilding size={22} />
        </i>
        <Heading level="h3">{pageTitle}</Heading>
      </Link>
    </li>
  );
};

export default ServicesListItem;
