import AsideCard from "@/components/base/asideCard/AsideCard";
import Container from "@/components/base/container/Container";
import RecomendListData from "@/data/recomendList";
import RecomendSection from "@/components/UI/recomendSection/RecomendSection";

const PageWithAside = ({ children }) => {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 gap-16">
        <AsideCard />
        <main className="lg:col-span-3">
          {children}
          <RecomendSection list={RecomendListData} />
        </main>
      </div>
    </Container>
  );
};

export default PageWithAside;
