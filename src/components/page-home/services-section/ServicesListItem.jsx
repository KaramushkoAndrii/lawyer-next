// import Link from "next/link";
import { Link } from "@/i18n/routing";
import { FaRegBuilding } from "react-icons/fa";
import Heading from "@/components/UI/heading/Heading";

const ServicesListItem = ({ data }) => {
  const { href, title } = data;
  return (
    <li className="p-4 border border-solid border-primary rounded-main shadow-main w-full max-w-70 transition-all duration-300 ease-in-out hover:scale-list-item hover:shadow-main-large">
      <Link
        href={href}
        className="flex items-center gap-8 h-full lg:flex-col lg:items-start lg:justify-between"
      >
        <i>
          <FaRegBuilding size={22} />
        </i>
        <h3 className="text-services">{title}</h3>
      </Link>
    </li>
  );
};

export default ServicesListItem;
