import ServicesListItem from "./ServicesListItem";
import Heading from "../heading/Heading";

const ServicesList = ({
  title,
  listData,
  footer,
  keyGroup = null,
  routePath,
}) => {
  return (
    <>
      <Heading className="mt-4">{title}</Heading>
      <ul className="grid gap-6 mt-4 mb-4 lg:grid-cols-2 ">
        {listData.map((item) => (
          <ServicesListItem
            key={item.id}
            slugData={item.slug}
            text={item.text}
            keyGroup={keyGroup}
            routePath={routePath}
          />
        ))}
      </ul>
      <Heading level="h3" align="center">
        {footer}
      </Heading>
    </>
  );
};

export default ServicesList;
