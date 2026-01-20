import Link from "next/link";

const ServicesListItem = ({ data }) => {
  const { href, title } = data;
  return (
    <li className="p-4 border border-solid border-primary rounded-main shadow-main">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default ServicesListItem;
