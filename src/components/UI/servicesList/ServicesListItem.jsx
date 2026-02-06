import { Link } from "@/i18n/routing";

const ServicesListItem = ({ src, text }) => {
  return (
    <li>
      <Link
        href={src}
        className="flex p-4 w-full h-full items-center justify-center"
      >
        {text}
      </Link>
    </li>
  );
};

export default ServicesListItem;
