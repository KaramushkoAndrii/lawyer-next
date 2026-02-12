import AsideCard from "@/components/base/asideCard/AsideCard";
import Container from "@/components/base/container/Container";
import RecomendList from "../recomendSection/RecomendList";
import RecomendListData from "@/data/recomendList";

const PageWithAside = ({ children }) => {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 gap-16">
        <AsideCard />
        <main className="lg:col-span-3">
          {children}
          <RecomendList list={RecomendListData} />
        </main>
      </div>
    </Container>
  );
};

export default PageWithAside;
