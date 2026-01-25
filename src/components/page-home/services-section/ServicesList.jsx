import ServicesListItem from "./ServicesListItem";

const ServicesList = ({ data }) => {
  return (
    <ul className="servicesList flex justify-center gap-4 pt-8 pb-8 flex-wrap">
      {data.map((item, index) => (
        <ServicesListItem key={index} data={item} />
      ))}
    </ul>
  );
};

export default ServicesList;
