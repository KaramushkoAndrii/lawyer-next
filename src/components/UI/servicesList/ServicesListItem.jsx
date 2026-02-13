import { Link } from "@/i18n/routing";

const ServicesListItem = ({ src, text }) => {
  return (
    <li className="border border-solid border-transparent rounded-main shadow-main transition-all duration-500 ease-in-out hover:scale-list-item hover:shadow-main-large hover:border-primary">
      <Link
        href={src}
        className="flex p-4 w-full h-full items-center justify-center text-primary text-center"
      >
        {text}
      </Link>
    </li>
  );
};

export default ServicesListItem;
