import ServicesListItem from "./ServicesListItem";

const ServicesList = ({ title, listData, footer }) => {
  return (
    <>
      <h2 className="custom-h2 mt-4 text-center md:text-start">{title}</h2>
      <ul className="grid gap-6 mt-4 mb-4 lg:grid-cols-2 ">
        {listData.map((item) => (
          <ServicesListItem key={item.id} src={item.src} text={item.text} />
        ))}
      </ul>
      <h3 className="custom-h3 text-center">{footer}</h3>
    </>
  );
};

export default ServicesList;
