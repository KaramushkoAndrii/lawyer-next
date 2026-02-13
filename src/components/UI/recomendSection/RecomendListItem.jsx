const RecomendListItem = ({ icon: Icon, text }) => {
  return (
    <li className="grid grid-cols-[1fr_4fr] justify-center items-center rounded-main overflow-hidden h-full">
      <div className="flex justify-center items-center bg-primary h-full">
        <Icon className="w-[60%] h-[60%]" />
      </div>
      <span className="flex justify-center items-center text-recomend p-4 bg-secondary text-white h-full">
        {text}
      </span>
    </li>
  );
};

export default RecomendListItem;
