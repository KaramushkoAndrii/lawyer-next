import RecomendListData from "@/data/recomendList";
import RecomendList from "./RecomendList";

const RecomendSection = ({ list }) => {
  return (
    <section className="flex flex-col gap-4 mt-6">
      <h2 className="custom-h2">Чому ми?</h2>
      <h4>Нас рекомендують, тому що:</h4>
      <RecomendList list={list} />
    </section>
  );
};

export default RecomendSection;
