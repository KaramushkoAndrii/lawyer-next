const RecomendListItem = ({ icon, text }) => {
  return (
    <li>
      <div>{icon}</div>
      <span>{text}</span>
    </li>
  );
};

export default RecomendListItem;
