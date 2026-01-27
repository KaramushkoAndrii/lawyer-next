import Link from "next/link";
import { FaRegBuilding } from "react-icons/fa";

const ServicesListItem = ({ data }) => {
  const { href, title } = data;
  return (
    <li className="p-4 border border-solid border-primary rounded-main shadow-main w-full max-w-70 transition-all duration-300 ease-in-out hover:scale-list-item hover:shadow-main-large">
      <Link href={href} className="flex flex-col gap-2">
        <i>
          <FaRegBuilding size={22} />
        </i>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default ServicesListItem;
