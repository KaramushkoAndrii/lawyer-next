import AsideCard from "@/components/base/asideCard/AsideCard";
import Container from "@/components/base/container/Container";

const PageWithAside = ({ children }) => {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 gap-16">
        <AsideCard />
        <main className="lg:col-span-3">{children}</main>
      </div>
    </Container>
  );
};

export default PageWithAside;
