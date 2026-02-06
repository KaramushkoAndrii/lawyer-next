import ServicesListItem from "./ServicesListItem";

const ServicesList = ({ title, listData, footer }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className="grid lg:grid-cols-2">
        {listData.map((item) => (
          <ServicesListItem key={item.id} src={item.src} text={item.text} />
        ))}
      </ul>
      <h3>{footer}</h3>
    </>
  );
};

export default ServicesList;
