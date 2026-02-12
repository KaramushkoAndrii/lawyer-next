import RecomendListItem from "./RecomendListItem";

const RecomendList = ({ list }) => {
  return (
    <ul>
      {list?.map((item) => (
        <RecomendListItem key={item.id} icon={item.icon} text={item.text} />
      ))}
    </ul>
  );
};

export default RecomendList;
