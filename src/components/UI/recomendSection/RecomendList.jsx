import RecomendListItem from "./RecomendListItem";

const RecomendList = ({ list }) => {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {list?.map((item) => (
        <RecomendListItem key={item.id} icon={item.icon} text={item.text} />
      ))}
    </ul>
  );
};

export default RecomendList;
