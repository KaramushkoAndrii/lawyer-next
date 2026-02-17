import CaseCard from "./CaseCard";

const CaseCategoryList = ({ list }) => {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {list.map((item) => (
        <CaseCard key={item.id} card={item} />
      ))}
    </ul>
  );
};

export default CaseCategoryList;
