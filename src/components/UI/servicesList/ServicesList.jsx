import ServicesListItem from "./ServicesListItem";
import Heading from "../heading/Heading";

const ServicesList = ({ title, listData, footer }) => {
  return (
    <>
      <Heading className="mt-4">{title}</Heading>
      <ul className="grid gap-6 mt-4 mb-4 lg:grid-cols-2 ">
        {listData.map((item) => (
          <ServicesListItem key={item.id} src={item.src} text={item.text} />
        ))}
      </ul>
      <Heading level="h3" align="center">
        {footer}
      </Heading>
    </>
  );
};

export default ServicesList;
