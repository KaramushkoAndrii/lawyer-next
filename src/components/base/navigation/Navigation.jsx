import { Link } from "@/i18n/routing";

const Navigation = ({ list }) => {
  return (
    <nav className="naviagation">
      <ul className="navigation__list">
        {list.map((item, index) => (
          <li key={item.id || index}>
            <Link href={item.url || "/"}>{item.name || "link"}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
