import MainSection from "@/components/UI/mainSection/MainSection";
import PageWithAside from "@/components/UI/pageWithAside/PageWithAside";
import ServicesList from "@/components/UI/servicesList/ServicesList";
// import ServicesData from "@/data/servicesData";
import ModalButton from "@/components/UI/modalButton/ModalButton";
import Heading from "@/components/UI/heading/Heading";
import { ProtectionServicesData } from "@/data/servicesData";

export default function ProtectionPage() {
  return (
    <>
      <MainSection />
      <PageWithAside>
        <Heading>Юридичний захист боржників</Heading>
        <p>
          Все частіше громадяни стикаються не лише з проблемами щодо
          заборгованості за оплату комунальних послуг чи виплати кредитних
          зобов’язань, але й з необхідністю брати невеликі позики для
          повсякденних потреб у мікрофінансових установах або в знайомих. Згодом
          ці позики можуть перетворитися на значні борги, що в багато разів
          перевищують початкову суму.
        </p>
        <p>
          Також, вимоги кредиторів до боржників, як і накладення на них штрафних
          санкцій за невиконання зобовязань, як правило є необґрунтованими та
          незаконними. Це пояснюється тим, що позикодавці часто переслідують
          мету не тільки повернути надані в борг кошти, а й отримати з цього
          подвійний дохід. У разі порушення прав боржника (в тому числі на етапі
          виконавчого провадження), боржник має можливість звернутися до суду з
          позовом про їх захист, а також скористатися послугами адвоката або
          юриста для отримання правової підтримки.
        </p>
        <ServicesList
          title="Адвокат може надати боржнику такі види юридичної допомоги:"
          listData={ProtectionServicesData}
          keyGroup="ProtectionList"
          routePath="/protection"
        />
        <ModalButton>Связаться со мной</ModalButton>
        <Heading level="h3" align="center">
          Вказаний вище перелік послуг не є вичерпним
        </Heading>
      </PageWithAside>
    </>
  );
}
