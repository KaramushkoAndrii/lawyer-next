import ServicesListItem from "./ServicesListItem";

const ServicesList = ({ data }) => {
  return (
    <ul className="servicesList flex flex-col items-center">
      {data.map((item, index) => (
        <ServicesListItem key={index} data={item} />
      ))}
    </ul>
  );
};

export default ServicesList;
