import RecomendListData from "@/data/recomendList";
import RecomendList from "./RecomendList";

const RecomendSection = ({ list }) => {
  return (
    <section>
      <h2>Чому ми?</h2>
      <h4>Нас рекомендують, тому що:</h4>
      <RecomendList list={list} />
    </section>
  );
};

export default RecomendSection;
