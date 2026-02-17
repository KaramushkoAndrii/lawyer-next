import MainSection from "@/components/UI/mainSection/MainSection";
import PageWithAside from "@/components/UI/pageWithAside/PageWithAside";
import Heading from "@/components/UI/heading/Heading";
import CasesList from "@/components/page-cases/CasesList";
import { casesData } from "@/data/casesData";

export default function CasesPage() {
  return (
    <>
      <MainSection />
      <PageWithAside>
        <Heading>Кейсы</Heading>
        <p>
          На даній сторінці відображені приклади виграних нами справ. Саме тут
          ви знайдете реальні кейси, що демонструють успішну юридичну практику
          адвоката Рясного Владислава Денисовича. Тут представлені рішення у
          складних справах, які були вирішені на користь клієнтів у різних
          галузях права. Ці приклади ілюструють високий рівень професіоналізму,
          стратегічного мислення та уваги до деталей, що дозволяють досягати
          найкращих результатів для кожного клієнта.
        </p>
        <CasesList list={casesData} />
      </PageWithAside>
    </>
  );
}
